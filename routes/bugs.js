const express = require('express');
const router = express.Router();

const bugs = require('../controllers/bugs_controllers');

//redirects to bug's page
router.get('/bug', bugs.createBugs);

//create bug in database
router.post('/addToBug', bugs.addToBug);

//deletes bug's details
router.get('/destroy/:id', bugs.destroy);

module.exports = router;