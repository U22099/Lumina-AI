if(!self.define){let e,n={};const i=(i,c)=>(i=new URL(i+".js",c).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let o={};const t=e=>i(e,s),f={module:{uri:s},exports:o,require:t};n[s]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"maskable-icon-512x512.png",revision:"13672286b1edf9e14ec684139518eb30"},{url:"pwa-192x192.png",revision:"412d841c5eb8454cb5479897c45758b6"},{url:"pwa-512x512.png",revision:"3cf13447b230b16a370877c496260349"},{url:"pwa-64x64.png",revision:"cc88b2305c049efff161cccc8c978fe0"},{url:"manifest.webmanifest",revision:"ef45eb7c9fb86d35b79ca430e0102585"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
