const User = require("../Models/User")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// exports.getUser=async(req,res)=>{
//         try {
//             const Users = await User.find()
//             res.status(200).send({status : 200, msg : 'Users geted', Users})
//         } catch (error) {
//             res.status(500).send({errors : [{status : 500, msg : 'could not get User'}]})
//         }
//     }

exports.SignUp=async(req,res)=>{
    try {
            const {email,password} = req.body

            const found = await User.findOne({email})

            if(found){
                return res.status(400).send({errors : [{status : 400, msg : 'email or password already exists'}]})
            }

            const newUser = new User(req.body)

            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            newUser.password = hashedPassword

            await newUser.save()

            const payload = {id : newUser._id}
            var token = jwt.sign(payload, process.env.privateKey)


            res.status(200).send({status : 200, msg : 'User registred', newUser,token})

    } catch (error) {
        res.status(500).send({errors : [{status : 500, msg :'Could not registred'}]})
    }
}

exports.SignIn=async(req,res)=>{
    try {
        const  {email,password}= req.body
        const found = await User.findOne({email})

        if(!found){
            res.status(400).send({errors : [{status : 400, msg : 'email or password are wrongs'}]})
        }

        const matchedPassword = bcrypt.compareSync(password, found.password)

        if(!matchedPassword){
            res.status(400).send({errors : [{status : 400, msg : 'email or password are wrongs'}]})
        }

            const payload = {id : found._id}
            var token = jwt.sign(payload, process.env.privateKey)

        res.status(200).send({status : 200 , msg : 'User is connected',found, token})


    } catch (error) {
        res.status(500).send({errors : [{status : 500, msg : 'could not Connect'}]})
    }
}