//desestruturacao
const usuario = {
  nome: "Edgard",
  idade: 32,
  endereco: {
    cidade: "rio preto",
    estado: "mg"
  }
};

console.log(usuario);

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(usuario) {
  console.log(usuario.nome);
}
mostraNome(usuario);

function mostraNome2({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome2(usuario);
