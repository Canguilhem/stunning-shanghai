import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d2dc9e2a = () => interopDefault(import('..\\pages\\About\\index.vue' /* webpackChunkName: "pages_About_index" */))
const _2a3ec3e9 = () => interopDefault(import('..\\pages\\Admin\\index.vue' /* webpackChunkName: "pages_Admin_index" */))
const _c031259a = () => interopDefault(import('..\\pages\\covid\\index.vue' /* webpackChunkName: "pages_covid_index" */))
const _11dd219b = () => interopDefault(import('..\\pages\\Crypto\\index.vue' /* webpackChunkName: "pages_Crypto_index" */))
const _43b400c4 = () => interopDefault(import('..\\pages\\Glossary\\index.vue' /* webpackChunkName: "pages_Glossary_index" */))
const _59d8a2a2 = () => interopDefault(import('..\\pages\\Resume\\index.vue' /* webpackChunkName: "pages_Resume_index" */))
const _43b15691 = () => interopDefault(import('..\\pages\\Shanghai\\index.vue' /* webpackChunkName: "pages_Shanghai_index" */))
const _7848fc15 = () => interopDefault(import('..\\pages\\Youtube\\index.vue' /* webpackChunkName: "pages_Youtube_index" */))
const _fa5bd5e8 = () => interopDefault(import('..\\pages\\Crypto\\About\\index.vue' /* webpackChunkName: "pages_Crypto_About_index" */))
const _2c070154 = () => interopDefault(import('..\\pages\\Shanghai\\About\\index.vue' /* webpackChunkName: "pages_Shanghai_About_index" */))
const _5f8c5d52 = () => interopDefault(import('..\\pages\\Youtube\\About\\index.vue' /* webpackChunkName: "pages_Youtube_About_index" */))
const _c664dac8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _d2dc9e2a,
    name: "About"
  }, {
    path: "/Admin",
    component: _2a3ec3e9,
    name: "Admin"
  }, {
    path: "/covid",
    component: _c031259a,
    name: "covid"
  }, {
    path: "/Crypto",
    component: _11dd219b,
    name: "Crypto"
  }, {
    path: "/Glossary",
    component: _43b400c4,
    name: "Glossary"
  }, {
    path: "/Resume",
    component: _59d8a2a2,
    name: "Resume"
  }, {
    path: "/Shanghai",
    component: _43b15691,
    name: "Shanghai"
  }, {
    path: "/Youtube",
    component: _7848fc15,
    name: "Youtube"
  }, {
    path: "/Crypto/About",
    component: _fa5bd5e8,
    name: "Crypto-About"
  }, {
    path: "/Shanghai/About",
    component: _2c070154,
    name: "Shanghai-About"
  }, {
    path: "/Youtube/About",
    component: _5f8c5d52,
    name: "Youtube-About"
  }, {
    path: "/",
    component: _c664dac8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
