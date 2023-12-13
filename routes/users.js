const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controllers');

//redirects on project page
router.get('/create', usersController.create);

//app project's detail in database
router.post('/addProject', usersController.addToDB );

//delete project's details
router.get('/destroy/:id', usersController.destroy);

//filter project on the basis of author
router.get('/filter/:Author' , usersController.filter);
module.exports = router;