//definicao de valores padroes
function soma(a = 3, b = 6) {
  return a + b;
}

const somaArrow = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());

console.log(somaArrow(2, 2));
