const prisma = require('../models/prismaClient');

exports.getAllVendas = async (req, res) => {
  try {
    const vendas = await prisma.venda.findMany({
      include: { cliente: true, itens: true }
    });
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// ================================
//  CRIAR VENDAS
// ================================
exports.createVenda = async (req, res) => {
  try {
    const { clienteId, total, itens } = req.body;

    const novaVenda = await prisma.venda.create({
      data: {
        clienteId,
        total,
        itens: {
          create: itens.map(item => ({
            produtoId: item.produtoId,
            quantidade: item.quantidade,
            subtotal: item.subtotal
          }))
        }
      },
      include: { itens: true }
    });

    res.json(novaVenda);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
