const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controllers');


router.get('/create', usersController.create);
router.post('/addProject', usersController.addToDB );
router.get('/destroy/:id', usersController.destroy);
router.get('/filter/:Author' , usersController.filter);
module.exports = router;