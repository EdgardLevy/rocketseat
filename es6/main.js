//webpack, servico que disponibiliza uma forma de trabalhar com varios arquivos
//js na aplicacao, imagem, etc, atraves do javascript
//import { soma, sub } from "./funcoes";
//importa como uma variavel
import soma from "./soma";
//porem caso queira importar todas as funcoes dentro de um objeto
//poderia fazer
import * as funcoes from "./funcoes";

console.log(soma(1, 2));
console.log(funcoes.sub(4, 2));
