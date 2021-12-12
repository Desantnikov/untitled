import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@/pages/Home"
import About from "@/pages/About"
import Incrementor from "@/pages/Incrementor"
import NotFound from "@/pages/NotFound"

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/incrementor', component: Incrementor },
    { path: '*', component: NotFound },
  ]
})

new Vue({
  router,
}).$mount('#app')
