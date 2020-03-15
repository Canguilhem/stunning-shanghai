import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36d9eae1 = () => interopDefault(import('..\\pages\\About\\index.vue' /* webpackChunkName: "pages_About_index" */))
const _6af20442 = () => interopDefault(import('..\\pages\\Admin\\index.vue' /* webpackChunkName: "pages_Admin_index" */))
const _7a9c2665 = () => interopDefault(import('..\\pages\\Crypto\\index.vue' /* webpackChunkName: "pages_Crypto_index" */))
const _1336f9e8 = () => interopDefault(import('..\\pages\\Glossary\\index.vue' /* webpackChunkName: "pages_Glossary_index" */))
const _3bd2b379 = () => interopDefault(import('..\\pages\\Resume\\index.vue' /* webpackChunkName: "pages_Resume_index" */))
const _78c250db = () => interopDefault(import('..\\pages\\Shanghai\\index.vue' /* webpackChunkName: "pages_Shanghai_index" */))
const _276a908b = () => interopDefault(import('..\\pages\\Youtube\\index.vue' /* webpackChunkName: "pages_Youtube_index" */))
const _1193f902 = () => interopDefault(import('..\\pages\\Crypto\\About\\index.vue' /* webpackChunkName: "pages_Crypto_About_index" */))
const _60558468 = () => interopDefault(import('..\\pages\\Shanghai\\About\\index.vue' /* webpackChunkName: "pages_Shanghai_About_index" */))
const _adf20fc8 = () => interopDefault(import('..\\pages\\Youtube\\About\\index.vue' /* webpackChunkName: "pages_Youtube_About_index" */))
const _0649fd34 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
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
    path: "/Glossary",
    component: _1336f9e8,
    name: "Glossary"
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
}

export function createRouter () {
  return new Router(routerOptions)
}
