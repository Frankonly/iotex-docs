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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "24e98f69c70c5f77e900a9ead95d3c9d"
  },
  {
    "url": "assets/css/0.styles.5b4abfad.css",
    "revision": "9c575fffff1aa5bb939af12b2d271d21"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.a53bf144.js",
    "revision": "609771c7c6f17cbf07170c05441ff6d7"
  },
  {
    "url": "assets/js/4.4d57e39d.js",
    "revision": "715a1b6933499466e8f46fadf723c84d"
  },
  {
    "url": "assets/js/5.becd5187.js",
    "revision": "664299b744e44e76117e8d7213014949"
  },
  {
    "url": "assets/js/6.d04ea0af.js",
    "revision": "916d00004f945dc40e6e2bac0ec2b670"
  },
  {
    "url": "assets/js/app.5532557e.js",
    "revision": "1cd5d46ace632daac2808a607982e28d"
  },
  {
    "url": "docs/libraries-and-tools.html",
    "revision": "427bb1ce934a3a2af7d354e0e46ce32e"
  },
  {
    "url": "docs/misc.html",
    "revision": "784e779f06cf53e74be744a10671f588"
  },
  {
    "url": "index.html",
    "revision": "b3d44a498e04d6ace97d948c5a863283"
  },
  {
    "url": "logo.svg",
    "revision": "185c2afecb8c92147f3cb30c3db5b7c4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
