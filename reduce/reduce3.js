const compras = [
    { nome: "leite", preco: 5 },
    { nome: "pão", preco: 8 },
    { nome: "manteiga", preco: 12 }
]
const valorTotal = compras.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual
}, 0)