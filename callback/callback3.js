const produtos = [
    { id: 1, nome: "camiseta", preco: 30, promocao: false },
    { id: 2, nome: "caneca", preco: 15, promocao: true },
    { id: 3, nome: "bone", preco: 25, promocao: true },

];

//Filtrar apenas os produtos em promoção

const emPromocao = produtos.filter(p => p.promocao === true);
console.log(emPromocao)