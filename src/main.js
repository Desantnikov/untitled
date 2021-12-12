import Vue from 'vue'
import Home from "@/pages/Home"
import About from "@/pages/About"
import NotFound from "@/pages/404"
import Incrementor from "@/pages/Incrementor"


const routes = {
  '/': Home,
  '/about': About,
  '/incrementor': Incrementor,
}


new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})