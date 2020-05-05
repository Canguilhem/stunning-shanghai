import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c024d28 = () => interopDefault(import('../pages/About/index.vue' /* webpackChunkName: "pages/About/index" */))
const _2907e26a = () => interopDefault(import('../pages/Admin/index.vue' /* webpackChunkName: "pages/Admin/index" */))
const _5e5fe7e0 = () => interopDefault(import('../pages/covid/index.vue' /* webpackChunkName: "pages/covid/index" */))
const _b04a3848 = () => interopDefault(import('../pages/Crypto/index.vue' /* webpackChunkName: "pages/Crypto/index" */))
const _d0b2c60e = () => interopDefault(import('../pages/Glossary/index.vue' /* webpackChunkName: "pages/Glossary/index" */))
const _b4573770 = () => interopDefault(import('../pages/Resume/index.vue' /* webpackChunkName: "pages/Resume/index" */))
const _daa9c8b4 = () => interopDefault(import('../pages/Shanghai/index.vue' /* webpackChunkName: "pages/Shanghai/index" */))
const _2f9ba13e = () => interopDefault(import('../pages/Youtube/index.vue' /* webpackChunkName: "pages/Youtube/index" */))
const _5306da3a = () => interopDefault(import('../pages/Crypto/About/index.vue' /* webpackChunkName: "pages/Crypto/About/index" */))
const _163c9284 = () => interopDefault(import('../pages/Shanghai/About/index.vue' /* webpackChunkName: "pages/Shanghai/About/index" */))
const _44a8861c = () => interopDefault(import('../pages/Youtube/About/index.vue' /* webpackChunkName: "pages/Youtube/About/index" */))
const _392abd6c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1c024d28,
    name: "About"
  }, {
    path: "/Admin",
    component: _2907e26a,
    name: "Admin"
  }, {
    path: "/covid",
    component: _5e5fe7e0,
    name: "covid"
  }, {
    path: "/Crypto",
    component: _b04a3848,
    name: "Crypto"
  }, {
    path: "/Glossary",
    component: _d0b2c60e,
    name: "Glossary"
  }, {
    path: "/Resume",
    component: _b4573770,
    name: "Resume"
  }, {
    path: "/Shanghai",
    component: _daa9c8b4,
    name: "Shanghai"
  }, {
    path: "/Youtube",
    component: _2f9ba13e,
    name: "Youtube"
  }, {
    path: "/Crypto/About",
    component: _5306da3a,
    name: "Crypto-About"
  }, {
    path: "/Shanghai/About",
    component: _163c9284,
    name: "Shanghai-About"
  }, {
    path: "/Youtube/About",
    component: _44a8861c,
    name: "Youtube-About"
  }, {
    path: "/",
    component: _392abd6c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
