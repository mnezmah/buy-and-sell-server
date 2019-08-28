const Router = require('express')
// const User = require('./model')
const userRouter = require('../Auth/router')

const router = new Router()

/**
* Create new user by posting to /login 
*/
router.post('/login', userRouter.loginOrRegister)

module.exports = router