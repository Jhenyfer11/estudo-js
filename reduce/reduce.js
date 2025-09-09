//reduce reduz o array a um unico valor (numero, objetivo, array...)

const nums = [10, 20, 5];
const soma = nums.reduce((acc, cur) => acc + cur, 0)
console.log(soma)