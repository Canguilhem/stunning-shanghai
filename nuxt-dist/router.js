import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _36d9eae1 = () => interopDefault(import('..\\pages\\About\\index.vue' /* webpackChunkName: "pages_About_index" */))
const _6af20442 = () => interopDefault(import('..\\pages\\Admin\\index.vue' /* webpackChunkName: "pages_Admin_index" */))
const _7a9c2665 = () => interopDefault(import('..\\pages\\Crypto\\index.vue' /* webpackChunkName: "pages_Crypto_index" */))
const _3bd2b379 = () => interopDefault(import('..\\pages\\Resume\\index.vue' /* webpackChunkName: "pages_Resume_index" */))
const _78c250db = () => interopDefault(import('..\\pages\\Shanghai\\index.vue' /* webpackChunkName: "pages_Shanghai_index" */))
const _276a908b = () => interopDefault(import('..\\pages\\Youtube\\index.vue' /* webpackChunkName: "pages_Youtube_index" */))
const _1193f902 = () => interopDefault(import('..\\pages\\Crypto\\About\\index.vue' /* webpackChunkName: "pages_Crypto_About_index" */))
const _60558468 = () => interopDefault(import('..\\pages\\Shanghai\\About\\index.vue' /* webpackChunkName: "pages_Shanghai_About_index" */))
const _adf20fc8 = () => interopDefault(import('..\\pages\\Youtube\\About\\index.vue' /* webpackChunkName: "pages_Youtube_About_index" */))
const _0649fd34 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/About",
      component: _36d9eae1,
      name: "About"
    }, {
      path: "/Admin",
      component: _6af20442,
      name: "Admin"
    }, {
      path: "/Crypto",
      component: _7a9c2665,
      name: "Crypto"
    }, {
      path: "/Resume",
      component: _3bd2b379,
      name: "Resume"
    }, {
      path: "/Shanghai",
      component: _78c250db,
      name: "Shanghai"
    }, {
      path: "/Youtube",
      component: _276a908b,
      name: "Youtube"
    }, {
      path: "/Crypto/About",
      component: _1193f902,
      name: "Crypto-About"
    }, {
      path: "/Shanghai/About",
      component: _60558468,
      name: "Shanghai-About"
    }, {
      path: "/Youtube/About",
      component: _adf20fc8,
      name: "Youtube-About"
    }, {
      path: "/",
      component: _0649fd34,
      name: "index"
    }],

    fallback: false
  })
}
