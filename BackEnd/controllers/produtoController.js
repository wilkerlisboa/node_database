const prisma = require('../models/prismaClient');

exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// ================================
//  CRIAR PRODUTO
// ================================
exports.createProduto = async (req, res) => {
  try {
    const { nome, preco, estoque } = req.body;
    const novo = await prisma.produto.create({
      data: { nome, preco: parseFloat(preco), estoque: parseInt(estoque) }
    });
    res.json(novo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
