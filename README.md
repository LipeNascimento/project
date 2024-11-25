## Projeto API RESTful com Node.js, Express e Sequelize


Este projeto é uma API RESTful desenvolvida com Node.js e Express.js, utilizando Sequelize como ORM para gerenciar um banco de dados MySQL. 
A API oferece endpoints para operações de CRUD em itens, além de autenticação baseada em JWT para proteger as rotas.

## Estrutura do Projeto

![Descrição da imagem](https://i.ibb.co/CPPxPTH/estrutura.png)


## 📋 Funcionalidades

### Autenticação:

* Login de usuário com geração de token JWT.
* Middleware para validação do token e proteção de rotas.

### Gerenciamento de Itens:

* Criar, listar, atualizar e buscar itens por ID.
* Banco de dados relacional utilizando Sequelize.

### Estrutura Modular:

* Código organizado em controladores, middlewares, modelos e rotas.


### 📋 Tecnologias Utilizadas


* Node.js: Ambiente de execução para JavaScript.
* Express.js: Framework para criar servidores web e gerenciar rotas.
* Sequelize: ORM para modelagem e interação com o banco de dados.
* MySQL: Banco de dados relacional para armazenar as informações.
* JWT: Autenticação segura baseada em tokens.
* Docker: Containerização para fácil configuração e execução do projeto.


### 📋 Itens

| Método       | Endpoint       | Descrição               |
| :---         |     :---:      |          :---:           |
| GET          | /api/items     | Lista todos os itens    |
| GET          | /api/items/:id	| Retorna um item pelo ID |
| POST         | /api/items     | Cria um novo item       |
| PUT          | /api/items/:id | Atualiza os dados de um item|

### 📋 PDF da Apresentação



### 📋 Link Apresenteçao em Video


### 📋 Integrantes

* Weslley Bruno Almeida Santos – 32328864
* Felipe Reis Nascimento – 323210811
* Charles Miller De Souza Nascimento – 32326802
