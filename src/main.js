import Vue from 'vue'
import App from './App'
import router from './router'

import axios from './plugins/axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
