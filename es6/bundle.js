"use strict";

//escopo de variaveis
function teste(x) {
  //variaveis decladas dentro da funcao
  var y = 2;
  if (x > 5) console.log(x, y);
} //fora de escopo


console.log(y);
teste(10);
