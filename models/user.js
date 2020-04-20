const bcrypt = require('bcrypt')
const mongoose = require('./index')

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		trim: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		default: '123456',
		set(val) {
			return bcrypt.hashSync(val, 10)
		}
	},
	phone: {
		type: String,
		trim: true,
		default: ''
	}
})

UserSchema.set('toJSON', { minimze: false, virtuals: true })
UserSchema.set('toObject', { minimze: false, virtuals: true })

module.exports = mongoose.model('User', UserSchema)