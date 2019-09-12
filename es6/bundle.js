"use strict";

//Rest
//para adcionar um novo parametro dessa forma, sempre tem que alterar a funcao
function soma(a, b, c) {
  return a + b + c;
}

console.log(soma(1, 3, 1)); //usando o operador rest fica mais facil

function somaRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  //dentro do parametro pode ser usar o resto
  console.log(params); //utilizando reduce para fazer a soma, ex

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaRest(2, 2, 2, 2, 2, 2));
