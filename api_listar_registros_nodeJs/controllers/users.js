// Incluir  s bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funciolidades
const express = require('express');
// Chamar a função express
const router = express.Router();
// Incluir o arquivo que possui a conexão com banco de dados
const db = require('./../db/models');

// Criar a rota listar
router.get("/users", async (req, res) => {
    // Recuperar todos usuario do banco de dados
    const users = await db.Users.findAll({

        // Indicar quais colunas recuperar
        attributes: ['id','name','email'],

        // Ordenar os registros pela coluna id na forma descrente
        order: [['id', 'DESC']]
    });
    // Acessa o IF se encontrar o registro no banco de dados
    if(users){
        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            users
        });
    }else{
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: nenhum Usuario encontrado!"
        });
    }
});

// Criar a rota cadastrar
// Endereço para acessar atraves da aplicação externa: http://localhost:8080/users
/*
// Aplicação externa deve indicar que esta enviado os dados em formato de objeto
Content-Type: application/json

// Dados em formato de objeto
{
    "name": "Chimie",
    "email": "chimie@gmail.com"
}
*/

// Criar a rota cadastrar
router.post("/users", async (req, res) => {
    
    // Recber os dados enviados no corpo da requisição
    var dados = req.body;
    console.log(dados);
    
    // Salvar no banco de dados
    await db.Users.create(dados).then((dadosUsuario) => {
        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "Usuario cadastrado com sucesso!",
            dadosUsuario
        });

    }).catch(() => {
        // Pausar o processamento e retornar a mensagem de erro
        return res.json({
            mensagem: "Erro: Usuario não cadastrado com sucesso!"
        });
    });
    
    
});

// Exportar a instrução que esta dentro da constante router
module.exports = router;