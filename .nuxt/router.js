import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _75e9e61a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7c614482 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _e92d7958 = () => interopDefault(import('../pages/rooms/_id.vue' /* webpackChunkName: "pages/rooms/_id" */))
const _a77b79fa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/login",
    component: _75e9e61a,
    name: "login"
  }, {
    path: "/register",
    component: _7c614482,
    name: "register"
  }, {
    path: "/rooms/:id?",
    component: _e92d7958,
    name: "rooms-id"
  }, {
    path: "/",
    component: _a77b79fa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
