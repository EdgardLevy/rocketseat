"use strict";

var arr = [1, 3, 4, 5, 8, 9]; //map percorre o vetor e retorna alguma info em outro vetor
// const newArr = arr.map(function(item, index) {
//   return item * 2;
// });
//arrow functions
// const newArr = arr.map((item, index) => {
//   return item * 2;
// });
//reducao de codigo

var newArr = arr.map(function (item, index) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return "teste";
};

console.log(teste());
