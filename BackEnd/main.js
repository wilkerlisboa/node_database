const express = require('express');
const app = express();
require('dotenv').config();

const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const vendaRoutes = require('./routes/vendaRoutes');
const itemVendaRoutes = require('./routes/itemVendaRoutes');
const configuracaoRoutes = require('./routes/configuracaoRoutes');

app.use(express.json());

app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/vendas', vendaRoutes);
app.use('/itens', itemVendaRoutes);
app.use('/configuracao', configuracaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
