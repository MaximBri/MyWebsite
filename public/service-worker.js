const CACHE_NAME = 'pwa-cache-v4'
const PRECACHE_URLS = ['/', '/index.html', '/manifest.json']

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await clients.claim()
      const keys = await caches.keys()
      await Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    })()
  )
})

async function safeCachePut(request, response) {
  try {
    const cache = await caches.open(CACHE_NAME)
    await cache.put(request.url, response.clone())
  } catch (e) {}
}

self.addEventListener('fetch', (event) => {
  const req = event.request
  const url = new URL(req.url)

  if (req.method !== 'GET') return

  // if (url.hostname.includes('mokky.dev')) {
  //   event.respondWith(
  //     (async () => {
  //       const cache = await caches.open(CACHE_NAME)
  //       const cached = await cache.match(req)

  //       try {
  //         const res = await fetch(req)
  //         if (res.ok) {
  //           cache.put(req, res.clone())
  //         }
  //         return res
  //       } catch (e) {
  //         return (
  //           cached ||
  //           new Response('Offline data not available', { status: 503 })
  //         )
  //       }
  //     })()
  //   )
  //   return
  // }

  if (req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const networkResp = await fetch(req)
          safeCachePut(req, networkResp)
          return networkResp
        } catch (err) {
          const cache = await caches.open(CACHE_NAME)
          const cachedIndex =
            (await cache.match('/index.html')) || (await cache.match('/'))
          if (cachedIndex) return cachedIndex
          const offline = await cache.match('/offline.html')
          return (
            offline ||
            new Response('Offline', { status: 503, statusText: 'Offline' })
          )
        }
      })()
    )
    return
  }

  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) safeCachePut(req, res)
          return res
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME)
          return cache.match(req.url) || new Response(null, { status: 504 })
        })
    )
    return
  }

  if (
    req.destination === 'image' ||
    /\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/.test(url.pathname)
  ) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME)
        const cached = await cache.match(req.url)
        if (cached) return cached
        try {
          const resp = await fetch(req)
          if (resp && resp.ok) await cache.put(req.url, resp.clone())
          return resp
        } catch (err) {
          return (
            cache.match('/images/fallback.png') ||
            new Response(null, { status: 504 })
          )
        }
      })()
    )
    return
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      const cached = await cache.match(req.url)
      if (cached) return cached
      try {
        const resp = await fetch(req)
        if (resp && resp.ok) await cache.put(req.url, resp.clone())
        return resp
      } catch (err) {
        return new Response(null, { status: 504 })
      }
    })()
  )
})
