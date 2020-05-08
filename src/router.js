import Vue from 'vue';
import SignIn from './components/SignIn.vue'
import VueRouter from 'vue-router';

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
  
export default router;