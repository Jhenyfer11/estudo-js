const itens = [
    { nome: "caneta", categoria: "papelaria", preco: 3 },
    { nome: "caderno", categoria: "papelaria", preco: 15 },
    { nome: "maçã", categoria: "alimento", preco: 2 }
]

const totalPorCategoria = itens.reduce((acc, it) => {
    const cat = it.categoria;
    if (!acc[cat]) acc[cat] = 0;
    acc[cat] += it.preco;
    return acc;


}, {});
console.log(totalPorCategoria)