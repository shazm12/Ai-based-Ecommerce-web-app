const User = require('../models/Users.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const register  = (req, res, next) => {

    bcrypt.hash(req.body.password, 10, function(err,hashedPass) {

        if(err) {
            res.json({

                error: err

            })
        }

        let user =  new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
            phoneno: req.body.phoneno,
            address: req.body.address
            
        })
        user.save()
        .then(user => {
    
            res.json({
                message:'User added successfully',
                username: req.body.username
            })
    
        })
        .catch(error => {
            res.json({
                message: "An error occured"
            })
        })

    })



}


const login = (req,res,next) => {

    const username = req.body.username;
    const password  = req.body.password;
    User.findOne({username: username})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if(err) {

                    res.json({
                        error: err
                    })

                }
                if(result) {
                    let token = jwt.sign({username: user.username}, config.get('jwtSecret'), {expiresIn: '1h'})
                    res.status(200).json({
                        success: "Login successful",
                        token
                    })
                } else {
                    res.status(401).json({
                        error: "Password does not match"
                    })
                }
            })
        }
    })

}

const userdetail = (req,res,next) => {
    const username = req.body.username;
    User.findOne({username: username})
        .then(user => {
            res.status(200).json({
                user
            })
        })

}


module.exports = {
    register,login, userdetail
}