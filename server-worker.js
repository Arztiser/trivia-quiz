const CACHE_NAME = "randoms-site-cache-v2";

// Files to cache
const ASSETS_TO_CACHE = [
  '/',                      // Home page
  '/index.html',             // Cache main pages
  '/facts.html',
  '/jokes.html',
  '/letters.html',
  '/memes.html',
  '/numbers.html',
  '/people.html',
  '/quizzes.html',
  '/quotes.html',
  '/songs.html',
  '/videos.html',
  '/css/styles.css',         // Cache CSS
  '/img/pfp.png',            // Cache images
  'https://fonts.googleapis.com/css2?family=Jersey+10:wght@100;300;400;500;700;900&display=swap'  // Cache fonts
];

// Install event - Cache necessary assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);  // Cache all assets
    })
  );
  self.skipWaiting();
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);  // Delete old caches
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Serve cached content, fallback to network if not available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;  // Return cached asset if available
      }

      // Try fetching from the network as a fallback
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());  // Cache newly fetched resource
          });
        }
        return networkResponse;
      }).catch(() => {
        // Optional: Return a custom offline page if network fails (for pages that aren't cached)
        return caches.match('/offline.html');  // Add an offline.html page if desired
      });
    })
  );
});
