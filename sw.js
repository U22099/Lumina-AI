if(!self.define){let e,c={};const i=(i,n)=>(i=new URL(i+".js",n).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(c[s])return;let o={};const a=e=>i(e,s),f={module:{uri:s},exports:o,require:a};c[s]=Promise.all(n.map((e=>f[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0da9a918cac3602c720697e436cee44c"},{url:"apple-touch-icon-180x180.png",revision:"af384adcbcca7b2fc9baa61a3daf3230"},{url:"assets/index-1x4Q4IMn.css",revision:null},{url:"assets/index-KOnbbh61.js",revision:null},{url:"index.html",revision:"0172cd1aab8fd6f9ee27d9778882deeb"},{url:"logo.jpg",revision:"b51cffe421dfaaa5ac2bf655fd945ad3"},{url:"maskable-icon-512x512.png",revision:"13672286b1edf9e14ec684139518eb30"},{url:"pwa-192x192.png",revision:"412d841c5eb8454cb5479897c45758b6"},{url:"pwa-512x512.png",revision:"3cf13447b230b16a370877c496260349"},{url:"pwa-64x64.png",revision:"cc88b2305c049efff161cccc8c978fe0"},{url:"registerSW.js",revision:"5570337ce51945fb4fa38297517faa03"},{url:"user.jpg",revision:"2fc0cdf1d44931d7e1439700a44f2b71"},{url:"favicon.ico",revision:"c8d6be14c3ea94a559ce517dc3c48895"},{url:"manifest.webmanifest",revision:"d46db0612e0c3bf118ec4ee8d77ea49d"},{url:"maskable-icon-512x512.png",revision:"13672286b1edf9e14ec684139518eb30"},{url:"pwa-192x192.png",revision:"412d841c5eb8454cb5479897c45758b6"},{url:"pwa-512x512.png",revision:"3cf13447b230b16a370877c496260349"},{url:"pwa-64x64.png",revision:"cc88b2305c049efff161cccc8c978fe0"},{url:"manifest.webmanifest",revision:"d46db0612e0c3bf118ec4ee8d77ea49d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
