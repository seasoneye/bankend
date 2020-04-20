const path = require('path')
const cors = require('cors')
const express = require('express')
const bodyParper = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

const indexRouter = require('./routers/index')

app.use(cors())
app.use(bodyParper.json())
app.use(bodyParper.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/', indexRouter)

app.use(function (error, req, res, next) {
	let { message } = error
	return res.status(403).json({ message })
})

app.listen(port, () => {
	console.log(`server running on port ${port}`)
})

module.exports = app