const CACHE_NAME = "randoms-cache-v2";  // Version your cache to update when needed

// List of assets to cache
const ASSETS_TO_CACHE = [
  '/',                  // Home page
  '/index.html',         // Main pages
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
  '/css/styles.css',     // Stylesheet
  '/img/pfp.png',        // Images
  'https://fonts.googleapis.com/css2?family=Jersey+10:wght@100;300;400;500;700;900&display=swap', // Google Fonts
];

// Install event - Cache the assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);  // Add all assets to cache
    })
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);  // Remove old caches
          }
        })
      );
    })
  );
});

// Fetch event - Serve cached content or fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);  // Serve from cache or fallback to network
    })
  );
});
