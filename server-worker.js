const CACHE_NAME = "randoms-site-cache-v1";  // Version your cache

// Files to cache (main assets for offline functionality)
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
  '/img/prfp.png',           // Images
  'https://fonts.googleapis.com/css2?family=Jersey+10:wght@100;300;400;500;700;900&display=swap',  // Google fonts
];

// Install event - Cache assets during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);  // Cache all necessary assets
    })
  );
  self.skipWaiting();  // Activate service worker immediately after installation
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);  // Remove old cache versions
          }
        })
      );
    })
  );
  self.clients.claim();  // Take control of open clients
});

// Fetch event - Serve cached assets when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);  // Use cache or fallback to network
    }).catch(() => {
      // Optional: You could return a custom offline page or message here if needed
    })
  );
});
