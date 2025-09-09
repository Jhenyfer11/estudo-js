console.log("Bem-vindo");
const prompt = require("prompt-sync")();

let numero = prompt("Digite um numero");

if(numero > 0){
    console.log("esse numero é positivo");
} else{
    console.log("esse numero é negativo");
}