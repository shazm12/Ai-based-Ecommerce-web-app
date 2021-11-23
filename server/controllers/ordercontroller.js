const Order = require('../models/Orders.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/Users.js')
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bitzzcustcare@gmail.com',
      pass: 'bitzz1234'
    }
});

const neworder  = (req, res, next) => {
    
    let order =  new Order({

        username: req.body.username,
        email: req.body.email,
        cart: req.body.cart,
        address: req.body.address,
        totalamt: req.body.totalamt


            
    })
    order.save()
    .then(order => {

        var itemlist  = order.cart.map(item => {
            return item.itemname
        })
        var mailOptions = {
            from: 'bitzzcustcare@gmail.com',
            to: order.email,
            subject: 'Your Order has been confirmed',
            text: `Your order has been placed: Your items: ${itemlist} |  Total Amount: ${order.totalamt}` 
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).json({
            success:'Order taken successfully',
        })
    
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({
            error: "An error occured"
        })
    })




}


const orderdetails = (req, res, next) => {

    const username = req.body.username;
    Order.find({username: username})
        .then(details => {

            res.status(200).json(
                [details]
            )

        })




}

const cancelOrder = (req, res, next) => {

    const id = req.body.id;
    Order.deleteOne({_id: id})
        .then(details => {

            res.status(200).json({
                message : 'Deleted sucessfully'
            })

        })
        .catch(err => {
            res.status(400).json({
                'error': err
            })
        })




}





module.exports = {
    neworder,orderdetails,cancelOrder
}