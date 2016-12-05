import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'

Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)


const errorPage = {template:'<div><h2>sorry page error</h2></div>'}
import testRouteComponent from './components/testRouteComponent.vue'


const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{
			path: '/'
		},
		{
			path: '/test',
			component: testRouteComponent 
		},
		{
			path: '*',
			component: errorPage 
		}
		
	]
})


/* eslint-disable no-new */
const app = new Vue({
	router : router,
    // el: '#app',
    // template: '<App/>',
    components: { App },
    render: h => h(App)// 渲染模版：App, 等同于上面的tmplate，mount等同于el：'#app'
}).$mount('#app')
