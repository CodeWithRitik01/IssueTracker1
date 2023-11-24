const express = require('express');
const router = express.Router();

const bugs = require('../controllers/bugs_controllers');

router.get('/bug', bugs.createBugs);
router.get('/bugform', bugs.bugform);
router.post('/addToBug', bugs.addToBug);

module.exports = router;