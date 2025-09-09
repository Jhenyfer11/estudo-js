
// DIFERENÇA ENTRE LET E var

function exemplo() {
    if (true) {
        let x = 1 // escopo de bloco só existe dentro do if 
        var y = 2 //existe porque var "vaza do if"
    }
    console.log(x)
    console.log(y)

}

exemplo();




// Empurrar um array

const numeros = [1, 2, 3];

numeros = [4, 3];

numeros.push(4)
console.log(numeros)






// Nan e infinity

//divisão por 0 
console.log(5 / 0);

console.log("abc" * 3);

console.log(NaN === NaN);









const nomeCompleto = 'Lucas Lacerda';

console.log(nomeCompleto.length) // mostra o tamanho
console.log(nomeCompleto.toUpperCase())// transforma em maiusculo
console.log(`Olá, $(nomeCompleto)`)