// This is the service worker with caching for online and offline use

const CACHE_NAME = "therandomcache"; // Name your cache

// List of assets to cache (main pages and static assets)
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
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
  '/css/styles.css',
  '/img/pfp.png',
  '/img/pofp.png',
  '/img/prpf.png',
  'https://fonts.googleapis.com/css2?family=Jersey+10:wght@100;300;400;500;700;900&display=swap',
];

// Install event - Cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE); // Cache all essential assets
      })
  );
});

// Activate event - Cleanup old caches if any
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // Delete old caches
          }
        })
      );
    })
  );
});

// Fetch event - Serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached asset if available, otherwise fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // Optionally, you can handle cases where neither the cache nor network is available
        // For example, you could return a default asset or handle errors silently
      })
  );
});
