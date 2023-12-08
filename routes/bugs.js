const express = require('express');
const router = express.Router();

const bugs = require('../controllers/bugs_controllers');

router.get('/bug', bugs.createBugs);
router.post('/addToBug', bugs.addToBug);
router.get('/destroy/:id', bugs.destroy);

module.exports = router;