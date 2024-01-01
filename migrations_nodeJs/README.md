COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Criar a base de dados "wins" no banco de dados MySQL, necessario ter o MySQL
### CREATE DATABASE wins CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

Alterar no projeto as credençiais do banco de dados no arquivo ".env"

Executar as migrations
### npx sequelize-cli db:migrate

Executar o projeto
### node app.js


SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Sequelize é um biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Rodar o projeto
### node app.js

Manipular variaveis de ambiete
### npm install --save dotenv

Criar a migration
### npx sequelize-cli migration:generate --name create-users

Executar as migrations
### npx sequelize-cli db:migrate