const router = require('express').Router()
const morgan = require('morgan')
const authRoute = require('../routes/auth/auth.route')
// const userRoute = require('../routes/user.route')


router.use(morgan('dev'))
app.get('/', (req, res) => {
    try {
      console.log('Hello World')
    } catch (error) {
      Sentry.captureException(error);
    }
  })
router.use('/auth', authRoute)

module.exports = router