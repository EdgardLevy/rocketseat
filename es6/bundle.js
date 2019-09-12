"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Spread
//diferente do rest, faz o papel de repassar as infos de um obj ou array para outra estrutura de dados
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6]; //copia as propriedades dos arrays para o resultado

var arr3 = [].concat(arr1, arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3); //usando o spred para objetos

var usuario1 = {
  nome: "Edgard",
  idade: 32,
  empresa: "Interlaken"
}; //copia as propriedades do usuario1, mas altera o nome

var usuario2 = _objectSpread({}, usuario1, {
  nome: "Outro"
}); //mto utilizado no react


console.log(usuario2);
