const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const authRoutes = require('./routes/authRoutes'); // Importa as rotas de autenticação

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Rotas
app.use('/api/items', itemRoutes);
app.use('/api/auth', authRoutes); // Adiciona as rotas de autenticação

module.exports = app;
