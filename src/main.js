import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/pages/Home"
import About from "@/pages/About"
import NotFound from "@/pages/404"
import Incrementor from "@/pages/Incrementor"

Vue.use(VueRouter)


// 3. Create the router
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

router.beforeEach((to, from, next) => {
  if (to.query.delay) {
    setTimeout(() => {
      next()
    }, Number(to.query.delay))
  } else {
    next()
  }
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
const vueInstance = new Vue({
  router,
  data: () => ({ n: 0 }),
  template: `
    <div id="#app">
      <h1>Basic</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/about">/about</router-link></li>
        <li><router-link to="/incrementor">/incrementor</router-link></li>
        <li><router-link to="/wrong_url">/wrong_url</router-link></li>
      </ul>
      <button id="navigate-btn" @click="navigateAndIncrement">On Success</button>
      <pre id="counter">{{ n }}</pre>
      <pre id="query-t">{{ $route.query.t }}</pre>
      <pre id="hash">{{ $route.hash }}</pre>
      <router-view class="view"></router-view>
    </div>
  `,

  methods: {
    navigateAndIncrement () {
      const increment = () => this.n++
      if (this.$route.path === '/') {
        this.$router.push('/foo', increment)
      } else {
        this.$router.push('/', increment)
      }
    }
  }
}).$mount('#app')

document.getElementById('unmount').addEventListener('click', () => {
  vueInstance.$destroy()
  vueInstance.$el.innerHTML = ''
})