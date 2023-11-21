const router = require('express').Router()
const morgan = require('morgan')
const authRoute = require('../routes/auth/auth.route')
// const userRoute = require('../routes/user.route')


router.use(morgan('dev'))
router.use('/auth', authRoute)

module.exports = router