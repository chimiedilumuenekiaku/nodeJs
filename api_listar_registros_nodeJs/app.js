// Incluir as bibliotecas
// Gerencia as requisições, rotas et URLs, entre outra funcionalidades
const express = require("express");
// Chamar a função express
const  app = express();

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

// Testar conexão com banco de dados
// const db = require("./db/models");

// Incluir as CONTROLLERS
const users = require('./controllers/users.js');

// Criar as rotas
app.use('/', users);
// Iniciar o servidor na porta 8080, criar a função utilizando modelo arrow function para retornar a mensagem de successo
app.listen(8080, () => {
    console.log("Servidor iniciada na porta 8080: http://localhost:8080");
});