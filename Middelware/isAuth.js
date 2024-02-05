const User = require("../Models/User")
var jwt = require('jsonwebtoken');


exports.isAuth=async(req,res,next)=>{
    try {
        
        const token = req.header('authorization')

        var decoded = jwt.verify(token, process.env.privateKey)

        if(!decoded){
            return res.status(400).send({errors : [{status : 400, message : 'invalid token'}]})
        }

        const findUser = await User.findById(decoded.id)

        req.user = findUser

        next()

    } catch (error) {
        res.status(500).send({errors: [{status : 500,message : 'not authorized'}]})
    }

    
}