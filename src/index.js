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
	routers:[
		{ path: '/', component:App },
		{ path: '/signin', component:SignIn }
	]
})
new Vue({
	router,
	store,
	render: h => h(App)
  }).$mount("#app")