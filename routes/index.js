const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_Controller')

console.log('router is loaded');

//home page
router.get('/', homeController.home);

//redirects to user's route
router.use('/users', require('./users'));

//redirects to bug's route
router.use('/show', require('./bugs'));

module.exports = router;