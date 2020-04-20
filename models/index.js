const mongoose = require('mongoose')

const admin = ''
const password = ''
const dataURL = 'mongodb://127.0.0.1:27017/backend'

let options = { userNewUrlParser: true }

if (admin) options.auth = { admin, password }

mongoose.connect(dataURL, options, () => {
	console.log('database connect success')
}).catch(err => {
	console.log(err)
})

module.exports = mongoose