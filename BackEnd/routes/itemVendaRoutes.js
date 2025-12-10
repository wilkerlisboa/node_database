const express = require('express');
const router = express.Router();
const itemVendaController = require('../controllers/itemVendaController');

router.get('/', itemVendaController.getAllItens);

module.exports = router;
