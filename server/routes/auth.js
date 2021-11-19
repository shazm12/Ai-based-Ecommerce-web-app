const express = require('express');

const router  = express.Router();

const { register,login,userdetail } = require('../controllers/authcontroller.js')


router.post('/register', register);
router.post('/login', login);
router.post('/userdetail', userdetail);

module.exports = router;