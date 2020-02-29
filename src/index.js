import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import SignIn from './components/SignIn.vue'
import store from './store'
import VueRouter from 'vue-router'
import { currency } from './currency'

Vue.filter('currency', currency)
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		
		{ path: '/signin', component:SignIn },
		{
		  path: '/parent',
		  name: 'parent',
		  component: resolve => require(['./pages/parent'], resolve)
		},
		{
		  path: '*', 
		  redirect: '/parent'
		},
		{
		  path: '/about',
		  name: 'about',
		  component: resolve => require(['./pages/about'], resolve)
		}
	  ]
})
store.$router = router
/* eslint-disable */
new Vue({
	router,
	store,
	render: h => h(App)
  }).$mount("#app")