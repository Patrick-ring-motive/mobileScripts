/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [

];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {//F
  // Skip cross-origin requests, like those for Google Analytics.
//if (event.request.url.startsWith(self.location.origin)) {//A
    event.respondWith(//B
     
     
     
      caches.match(event.request).then(cachedResponse => {//C
        
 
       

        return  fetch(event.request).then(response => {//D
           
           var responseClone = response.clone();
         
     
         
           responseClone.clone().text()
    .then((text) => {//E
     console.log(text);
    });//E
   
         
                                 var bdy=`<!DOCTYPE html>
<html lang="en" class="no-js">
<head></head>
<body>
test body
</body>
</html>`;
 var httpHeaders = { 'Content-Type' : 'text/html', 
                            'accept-ch' : 'Sec-CH-UA-Arch,Sec-CH-UA-Bitness,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Model,Sec-CH-UA-Platform-Version',
                           'content-encoding' : 'gzip',
                            'location' : 'https://en.wikipedia.org/'
                           };


         var hdrs = new Headers(httpHeaders);
         var optns  = { status: 200, statusText: 'OK' ,hdrs};
        
        var responseAlt = new Response(bdy,optns);
   
       
         
       if (event.request.url.startsWith(self.location.origin)) {
           console.log(responseClone);
          
              return responseClone;
       }else{
       
       // responseClone.body='bdy';
           console.log(responseClone);
          
              return responseClone;
       
       }
         
          });//D
     
      })//C
    );//B
//  }/*A*/


         

  
   
 
});//F
