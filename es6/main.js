//REST
//server para pegar o resto das propriedades
//ex
const usuario = {
  nome: "Edgard",
  idade: 36,
  empresa: "Interlaken"
};

const { nome, ...resto } = usuario;

console.log(nome);
//rest operator fica com o valor restante da desestruturacao
console.log(resto);
