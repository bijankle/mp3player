const C='mp3-v2',F=['./','index.html','icon.svg','icon-192.png','icon-512.png','manifest.webmanifest'];
self.oninstall=e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)));
self.onfetch=e=>e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request)));
