import Vue from "vue"
import VueRouter from "vue-router"

import vuetify from './plugins/vuetify'

import Index from "@/pages/Index"
import About from "@/pages/About"
import Incrementor from "@/pages/Incrementor"
import NotFound from "@/pages/NotFound"

import WithComputed from "./components/WithComputed"


Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/incrementor', component: Incrementor },
    { path: '/with_computed', component: WithComputed },
    { path: '*', component: NotFound },
  ]
})

new Vue({
  vuetify,
  router,
}).$mount('v-app')
