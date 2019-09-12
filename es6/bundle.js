"use strict";

//desestruturacao
var usuario = {
  nome: "Edgard",
  idade: 32,
  endereco: {
    cidade: "rio preto",
    estado: "mg"
  }
};
console.log(usuario);
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(usuario) {
  console.log(usuario.nome);
}

mostraNome(usuario);

function mostraNome2(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome2(usuario);
