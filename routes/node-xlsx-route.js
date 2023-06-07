const { nodeXlsxController } = require('../controllers/nodeXlsxController');

const express = require('express');

const router = express.Router();

router.get('/', nodeXlsxController);

module.exports = router;