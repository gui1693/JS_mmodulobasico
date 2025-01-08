// Criar 3 variaveis number para efetuar o calculo de média entre as 3 e retornar uma resposta contendo uma string que se maior que 7 a frase "PASSOU", vai aparecer com a nota, se nao a frase "REPROVOU" vai aparecer junto com a nota no console do browser.


let nota1 = 8;
let nota2 = 4;
let nota3 = 7;


let media = (nota1 + nota2 + nota3) / 3;


if (media >= 7) {
    console.log(`PASSOU com a nota ${media.toFixed(2)}`);
} else {
    console.log(`REPROVOU com a nota ${media.toFixed(2)}`);
}



