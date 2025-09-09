// while

let i = 1

while (i <= 5) {
    console.log("Numero:" , i)
    i++
}

//do while
let senha;

do {
    senha = prompt("digite a senha:")
} while (senha !== "1234");

console.log("Acesso liberado!")