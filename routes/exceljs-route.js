const { excelJSController } = require('../controllers/excelJSController');

const express = require('express');

const router = express.Router();

router.get('/', excelJSController);

module.exports = router;