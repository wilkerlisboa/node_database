const express = require('express');
const router = express.Router();
const configuracaoController = require('../controllers/configuracaoController');

router.get('/', configuracaoController.getConfiguracao);
router.put('/', configuracaoController.updateConfiguracao);

module.exports = router;
