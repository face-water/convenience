import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import router from './router';
import store from './store'
import VueRouter from 'vue-router'
import { currency } from './currency'

Vue.filter('currency', currency)

store.$router = router
/* eslint-disable */
new Vue({
	router,
	store,
	render: h => h(App)
  }).$mount("#app")