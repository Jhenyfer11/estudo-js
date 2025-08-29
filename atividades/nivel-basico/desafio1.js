console.log("Bem-vindo");
const prompt = require("prompt-sync")();
let nome = prompt("Digite o seu nome");
console.log(`Seu nome é: ${nome}`);

let idade = prompt("Digite sua idade");

if(idade >= 18){
    console.log("você é maior de idade");
} else{
    console.log("você não é maior de idade");
}