const CACHE_NAME_V1 = 'p-receipt-cache-v1';
const CACHE_NAME_V2 = 'whenfive-cache-v2';
const CACHE_NAME_V3 = 'cunsensus-cache-v3';
const CACHE_NAME_V4 = 'wygomp-cache-v4';

const urlsToCacheV1 = [
  '/',
  '/p-receipt.html',
  '/p-receipt.css',
  '/p-receipt.js',
  '/images/priceyfav.png',
  '/images/img3.avif',
  '/images/wygofav.jpg',
  '/font/doto.ttf',
  '/font/munyon',
  '/wygomp.html',
  '/whenfive.html',
  'https://urls.grow.me/rb2xoN7Ne',
  '/cunsensus.html',
  'https://www.rakuten.com',
  'https://google.com/maps',
  '/images/store.jpeg',
  '/images/receipt.jpg',
  'mailto:techniquecole7@gmail.com',
];

const urlsToCacheV2 = [
  '/whenfive.html',
  '/whenfive.css',
  '/whenfive.js',
  '/images/high53.jpg',
  '/images/high54.jpg',
  '/images/high52.jpg',
  '/wygomp.html',
  '/cunsensus.html',
  '/p-receipt.html',
  '/fonts/munyon.ttf',
  'mailto:techniquecole7@gmail.com',
];

const urlsToCacheV3 = [
  '/cunsensus.html',
  '/cunsensus.ccs',
  '/cunsensus.js',
  '/images/consensus.jpg',
  '/images/consensus2.webp',
  '/wygomp.html',
  '/p-receipt.html',
  '/whenfive.html',
  '/fonts/Unna-Regular.ttf',
  '/fonts/Unna-Bold.ttf',
  'mailto:techniquecole7@gmail.com',
];

const urlsToCacheV4 = [
  '/wygomp.html',
  '/wygomp.js',
  '/images/wygo.png',
  '/videos/awtumn.mp4',
  '/images/bmwjupiter.png',
  '/images/udio2.png',
  'https://vivago.ai/home',
  'https://maps.google.com',
  'https://www.fueleconomy.gov/feg/findacar.shtml',
  'https://www.vivago.ai/home',
  'https://gasprices.aaa.com/state-gas-price-averages/',
  'https://www.udio.com',
  'mailto:techniquecole7@gmail.com',
  '/whenfive.html',
  '/p-receipt.html',
  '/cunsensus.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME_V1).then(cache => cache.addAll(urlsToCacheV1)),
      caches.open(CACHE_NAME_V2).then(cache => cache.addAll(urlsToCacheV2)),
      caches.open(CACHE_NAME_V3).then(cache => cache.addAll(urlsToCacheV3)),
      caches.open(CACHE_NAME_V4).then(cache => cache.addAll(urlsToCacheV4)),
    ])
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});