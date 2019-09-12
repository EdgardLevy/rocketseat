//Rest
//para adcionar um novo parametro dessa forma, sempre tem que alterar a funcao
function soma(a, b, c) {
  return a + b + c;
}

console.log(soma(1, 3, 1));
//usando o operador rest fica mais facil
function somaRest(...params) {
  //dentro do parametro pode ser usar o resto
  console.log(params);
  //utilizando reduce para fazer a soma, ex
  return params.reduce((total, next) => total + next);
}

console.log(somaRest(2, 2, 2, 2, 2, 2));
