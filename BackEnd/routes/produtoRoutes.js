const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.getAllProdutos);
router.post('/', produtoController.createProduto);

module.exports = router;
