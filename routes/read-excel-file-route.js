const { readExcelFileController } = require('../controllers/readExcelFileController');

const express = require('express');

const router = express.Router();

router.get('/', readExcelFileController);

module.exports = router;