// Imprimir na tela o texto
console.log("Ola Mundo!");

// Criar a variavel com Javascript
var cliente = "Chimie";

// Imprimir na tela o texto e o conteudo da variavel
console.log("Cliente: " + cliente);

// Criar a variavel com javascript
var valorProduto = 100;
var valorDesconto = 47;

// Incluir o arquivo com a funcão calcular desconto
var calcularDesconto = require('./modoles/calcularDesconto.js'); 

//utilizar a funcão calcularDesconto
var valorFinal = calcularDesconto(valorProduto,valorDesconto);

// Imprimir na tela o texto e o conteudo da variavel
console.log("valor do produto com desconto: R$ " + valorFinal);