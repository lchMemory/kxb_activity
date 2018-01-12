import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home.vue';
import myReward from './components/myReward.vue';
import hReward from './components/hReward.vue';
import sReward from './components/sReward.vue';
Vue.use(VueRouter)
//安装路由功能
//配置路由
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/myReward', component: myReward,

  	children: [
  	       {
  	         // 当 /user/:id/profile 匹配成功，
  	         // UserProfile 会被渲染在 User 的 <router-view> 中
  	         path: 'h-reward',
  	         component: hReward
  	       },
  	       {
  	         // 当 /user/:id/posts 匹配成功
  	         // UserPosts 会被渲染在 User 的 <router-view> 中
  	         path: 's-reward',
  	         component:sReward
  	       },
            { path: '/myReward', redirect: '/myReward/h-reward' },
  	       ]
   },
]

const router = new VueRouter({
	linkActiveClass: 'active',
  routes 
})

export default router;