import axios from 'axios'

const $axios = {}

$axios.install = Vue => {
	axios.defaults.baseURL = 'http://localhost:3000'

	axios.interceptors.request.use(config => {
		//config.headers.Authorization = window.sessionStorage.getItem('token')
		if (localStorage.token) { //判断token是否存在
			config.headers.Authorization = localStorage.token;  //将token设置成请求头
		}

		return config
	}, error => {
		// Do something with request error
		Message.error({
			message: '请求错误：' + error.message
		})
		return Promise.reject(error)
	})

	axios.interceptors.response.use(res => res, ({ response }) => Promise.reject(response.data))

	Vue.prototype.$axios = axios
}

export default $axios