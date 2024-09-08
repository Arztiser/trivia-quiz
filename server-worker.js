const CACHE_NAME = "randoms-site-cache-v3";

// Files to cache during installation
const ASSETS_TO_CACHE = [
  '/',                      // Home page
  '/index.html',             // Main pages
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
  '/css/styles.css',         // Stylesheets
  '/img/pfp.png',            // Images
  'https://fonts.googleapis.com/css2?family=Jersey+10:wght@100;300;400;500;700;900&display=swap'  // Fonts
];

// Install event - Cache necessary assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);  // Cache all necessary assets
    })
  );
  self.skipWaiting();  // Activate the service worker immediately
});

// Activate event - Remove old caches
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
  self.clients.claim();  // Take control of open clients immediately
});

// Fetch event - Serve cached content if available, fallback to network if not
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;  // Return cached response if available
      }

      // Try fetching from the network if not cached
      return fetch(event.request).then((networkResponse) => {
        // Clone the response to use it for both the cache and the browser
        const clonedResponse = networkResponse.clone();

        // Cache the newly fetched resource
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, clonedResponse);  // Cache cloned response
        });

        return networkResponse;  // Serve the network response to the browser
      }).catch(() => {
        // Return a custom offline page if network fetch fails (optional)
        return caches.match('/offline.html');  // You can add offline.html if you want
      });
    })
  );
});
