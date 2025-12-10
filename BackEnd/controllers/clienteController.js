const prisma = require('../models/prismaClient');

// ================================
//  VER TODOS OS CLIENTES
// ================================
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================================
//  CRIAR CLIENTES
// ================================
exports.createCliente = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const novo = await prisma.cliente.create({
      data: { nome, email, telefone }
    });
    res.json(novo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
