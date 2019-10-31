const express = require('express');
const gameController = require('../controllers/gameController');
const router = express.Router();


router.post('/score', gameController.addScore);

router.get('/getAll', gameController.getAllGameData);

module.exports = router;