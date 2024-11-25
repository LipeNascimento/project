# Use a imagem base do Node.js
FROM node:16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de dependências para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do projeto para o contêiner
COPY . .

# Exponha a porta da aplicação
EXPOSE 3000

# Inicie o servidor
CMD ["npm", "run", "dev"]
