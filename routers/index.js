const express = require('express')

const router = express.Router()

router.get('/login', (req, res, next) => {
	//res.json({ msg: 'hello' })
	next(new Error('error'))
})

module.exports = router