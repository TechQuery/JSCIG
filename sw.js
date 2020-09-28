/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "dbaecd9367a917813aafd434a64d8b15"
  },
  {
    "url": "index.webmanifest",
    "revision": "ba06ae43eeff3346b9908c253fe36f6b"
  },
  {
    "url": "source.d7de61e7.css",
    "revision": "ffffb16cd748097a5a8e2566a35dac1b"
  },
  {
    "url": "source.dcfbf4fb.js",
    "revision": "68e7355f0ef21749edcc6a0cdce76bf4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();
