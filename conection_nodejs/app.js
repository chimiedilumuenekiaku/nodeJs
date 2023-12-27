// Incluir a dependençia MySQL
const mysql = require('mysql2');

// create the connection to database MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chimie'
  });

  connection.connect(function(err){
    console.log("Conexão com o banco de dados realizado com sucesso!")
  });

  connection.query("SELECT id, name, email FROM users", function(err,rows,fields){
    if(!err){
        console.log("Resultado:", rows);
    }else{
        console.log('Erro: Consulta não realizada com sucesso!');
    }
  });