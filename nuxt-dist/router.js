import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36d9eae1 = () => interopDefault(import('..\\pages\\About\\index.vue' /* webpackChunkName: "pages_About_index" */))
const _6af20442 = () => interopDefault(import('..\\pages\\Admin\\index.vue' /* webpackChunkName: "pages_Admin_index" */))
const _f7d24be8 = () => interopDefault(import('..\\pages\\Projects\\index.vue' /* webpackChunkName: "pages_Projects_index" */))
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
    path: "/Projects",
    component: _f7d24be8,
    name: "Projects"
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
