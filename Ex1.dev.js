"use strict";

var ValidaSituacao = function ValidaSituacao(a) {
  return a < 2 ? 'Aprovado' : a < 4 ? 'Lista de espera' : 'Não foi desta vez';
};
/*function ValidaSituacao(a){
    if (a < 2 ){
        return "Aprovado"
    }
    else if (a < 4){
        return "lista de espera"
    } 
    else{
        return "Não foi desta vez"
    } 
}
*/


function Concatenar(Strings) {
  Strings.reduce(function (x, texto, i) {
    console.log("Aluno: " + texto + " com a situação de " + ValidaSituacao(i));
  }, ''); //for (nx = 0; nx < String.length; nx++){
  //   console.log("Aluno: " + String[nx] + " com a situação de " + ValidaSituacao)
  // }
}

Concatenar(["Juan", "Lucas", "Luan", "Flavio", "Alex", "Sara"]);
/*["Juan", "Lucas", "Luan", "Flavio", "Alex", "Sara"];

//Juan e Lucas estão aprovados
//Lucas e Flavio em lista de espera
//Alex e Sara */