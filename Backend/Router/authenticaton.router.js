const { registerationApi,loginApi } = require('../Controller/authentication.Controller')

const authenticationRouter = require('express').Router()
//======== post Api ============
authenticationRouter.post('/',registerationApi)
authenticationRouter.post('/login',loginApi)

module.exports = authenticationRouter