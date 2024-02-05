const express =require('express')
const { SignUp, SignIn} = require('../Controllers/User')
const { validationRegister, Validation } = require('../Middelware/Validation')
const { isAuth } = require('../Middelware/isAuth')



const userRoute = express.Router()

// userRoute.get('/getUser', getUser)


userRoute.post('/SignUp',validationRegister,Validation, SignUp )


userRoute.post('/SignIn',validationRegister,Validation, SignIn)


userRoute.get('/userConnected', isAuth, async(req,res)=>{res.send(req.user)})

module.exports = userRoute