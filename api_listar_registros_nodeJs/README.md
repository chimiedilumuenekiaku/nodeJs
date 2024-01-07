COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Criar a base de dados no MySQL
Alterar as credenciais do banco de dados no arquivo ".env"

Executar as migrations
### npx sequelize-cli db:migrate

Executar as seeders
### npx sequelize-cli db:seed:all

Criar o arquivo package
### npm init

Rodar o projeto
### node app.js

Rodar o projeto usando nodemon
### nodemon app.js

SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install --save express

Rodar o projeto
### node app.js

Rodar o projeto usando nodemon
### nodemon app.js

Instalar a dependencia de forma global, "-g" significa globalmente. executar o comando atraves do prompt de comando, executar somente se nunca instalou a dependencia na maquina, apos instalar, reiniciar o PC.
### npm install -g nodemon

Instalar a dependencia como desenvolvedor para reiniciar o servidor sempre que houver alteração no cidigo fonte.
### npm install --save-dev nodemon

Rodar o projeto usando nodemon
### nodemon app.js

Abrir o endereço no navegador para acessar a pagina inicial
### http://localhost:8080

Comando SQL para criar a base de dados
### CREATE DATABASE otniel CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-ci interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Manipular variaveis de ambiente
### npm install dotenv --save

Criar a Models usuarios
### npx sequelize-cli model:generate --name Users --attributes name:string,email:string

Executar as migrations
### npx sequelize-cli db:migrate