//Spread
//diferente do rest, faz o papel de repassar as infos de um obj ou array para outra estrutura de dados

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//copia as propriedades dos arrays para o resultado
const arr3 = [...arr1, ...arr2];

console.log(arr1);
console.log(arr2);
console.log(arr3);

//usando o spred para objetos
const usuario1 = { nome: "Edgard", idade: 32, empresa: "Interlaken" };
//copia as propriedades do usuario1, mas altera o nome
const usuario2 = { ...usuario1, nome: "Outro" };

//mto utilizado no react

console.log(usuario2);
