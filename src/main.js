import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import './static/media.css'
Vue.use(MintUI)
new Vue({
  el: '#app',
  router:router,
  store,
  render: h => h(App)
})
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

