const { xlsxController } = require('../controllers/xlsxController');

const express = require('express');

const router = express.Router();

router.get('/', xlsxController);

module.exports = router;