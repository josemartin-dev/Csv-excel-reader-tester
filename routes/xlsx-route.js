const { xlsxGetController, xlsxPostController } = require('../controllers/xlsxController');

const express = require('express');

const router = express.Router();

router.get('/', xlsxGetController);

router.post('/', xlsxPostController);

module.exports = router;