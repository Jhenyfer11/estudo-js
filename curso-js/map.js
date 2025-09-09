//Map

const nums = [1, 2, 3, 4];

//map cria um novo array com o resultado da função aplicada a cada item

const dobrados = nums.map(n => n * 2);
console.log (dobrados)

const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 6 }
];

const nomes = alunos.map(a => `${a.nome}`)
const comAprovacao = alunos.map(a => ({...a, aprovado: a .nota >= 7}));
