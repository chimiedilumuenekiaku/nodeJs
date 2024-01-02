// Normatizar o codigo, ajuda evitar gambiarras
'use strict';

// Permite trabalhar com o sistema de arquivos do computador
const fs = require('fs');
// Fornece utilitarios para trabalhar com camonhos de arquivos e diretorios
const path = require('path');
// Sequelize é um ORM para Node.js, que temsuporte varios bancos de dados
// ORM mapeamento objeto-relacional, as tablas do banco de dados são representadas em classe os registros das tabelas sriam instancias dessas classes 
const Sequelize = require('sequelize');
// Permite obter informações do processo na pagina atual
const process = require('process');
// Permite obter parte do caminho para arquivo
const basename = path.basename(__filename);
// Verificar se deve utilizar a variavel golbal ou 'developpment'
const env = process.env.NODE_ENV || 'development';
// Incluir o arquivo
const config = require(__dirname + '/../config/config.js')[env];
// Criar a constante com objeto vazio
const db = {};

// Criar a variavel que recebe a conexão com banco de dados
let sequelize;
// Verificar qual configuração de banco de dados voce deseja usar
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Verificar a conexão com banco de dados
try{
  console.log("Conexão com o banco de dados realizado com sucesso!");
}catch(error){
  console.log("Erro: Conexão com o banco de dados não reqlizado com sucesso!", error);
}

// Identificar o MODEL
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
