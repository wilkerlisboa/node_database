const prisma = require('../models/prismaClient');

exports.getAllItens = async (req, res) => {
  try {
    const itens = await prisma.itemVenda.findMany({
      include: { produto: true, venda: true }
    });
    res.json(itens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
