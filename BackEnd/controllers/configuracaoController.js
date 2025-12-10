const prisma = require('../models/prismaClient');

exports.getConfiguracao = async (req, res) => {
  try {
    const config = await prisma.configuracao.findFirst();
    res.json(config);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// ================================
//  ATUALIZAR CONFIG
// ================================
exports.updateConfiguracao = async (req, res) => {
  try {
    const { nomeLoja, endereco, cnpj } = req.body;
    const config = await prisma.configuracao.upsert({
      where: { id: 1 },
      update: { nomeLoja, endereco, cnpj },
      create: { nomeLoja, endereco, cnpj }
    });
    res.json(config);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
