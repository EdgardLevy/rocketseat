const arr = [1, 3, 4, 5, 8, 9];

//map percorre o vetor e retorna alguma info em outro vetor
const newArr = arr.map(function(item, index) {
  return item + index;
});

console.log(newArr);

//reduce percorre o vetor para 'reduzir' em uma unica informacao

const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
  //verifica se o numero eh par
  //utilizando o operador de modulo que retorna o diferencial da divisao
  return item % 2 === 0;
});

console.log(filter);

//find busca alguma coisa no vetor

const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);
