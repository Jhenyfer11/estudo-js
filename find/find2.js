const produtos = [
    { id: 1, nome: "camiseta" },
    { id: 2, nome: "caneca" },
];
const p = produtos.find(p => p.id === 2)
console.log(p)