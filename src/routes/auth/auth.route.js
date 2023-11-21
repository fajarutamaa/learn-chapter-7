const router = require('express').Router()
const { Register, Login} = require('../../controllers/auth/auth.controller')
// const { CheckUser } =require('../../middleware/middleware')
const { Authenticate } = require('../../middleware/restrict')

router.post('/register',  Register)
router.post('/login', Login)


module.exports = router