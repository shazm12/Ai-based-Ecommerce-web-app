const express = require('express');

const router  = express.Router();

const { neworder, orderdetails } = require('../controllers/ordercontroller.js')


router.post('/neworder', neworder);
router.post('/orderdetails', orderdetails);

module.exports = router;