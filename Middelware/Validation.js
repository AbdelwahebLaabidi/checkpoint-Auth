const { body, validationResult } = require('express-validator')

exports.validationRegister =[
    body('password','Your Password must contain 8 char').isLength({min : 8}),
    body('email', 'wrong email').isEmail()
]

exports.Validation =(req,res,next)=>{

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).send(errors)
        }

    next()

}