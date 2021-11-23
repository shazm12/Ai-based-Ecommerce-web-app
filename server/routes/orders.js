const express = require('express');

const router  = express.Router();

const { neworder, orderdetails,cancelOrder } = require('../controllers/ordercontroller.js')


router.post('/neworder', neworder);
router.post('/orderdetails', orderdetails);
router.post('/cancelorder', cancelOrder);


module.exports = router;