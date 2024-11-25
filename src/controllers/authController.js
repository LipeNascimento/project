const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Usuário fixo para teste (simulação de banco de dados)
const mockUser = {
  email: "test@example.com",
  password: bcrypt.hashSync("123456", 10), // Senha criptografada
};

// Login Controller
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Verifica se o email é válido
  if (email !== mockUser.email) {
    return res.status(401).json({ message: "Email ou senha inválidos" });
  }

  // Verifica se a senha está correta
  const validPassword = bcrypt.compareSync(password, mockUser.password);
  if (!validPassword) {
    return res.status(401).json({ message: "Email ou senha inválidos" });
  }

  // Gera o token JWT
  const token = jwt.sign({ email: mockUser.email }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Expira em 1 hora
  });

  res.json({ token });
};
