
// ) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua 
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou 
// não um bom aproveitamento (se ficou acima da média 7.0).
let nome = prompt("Qual é seu nome?")
let N1 = parseFloat(prompt("Digte sua 1° nota:"))
let N2 = parseFloat(prompt("Digte sua 2° nota:"))

let media =(N1 + N2 ) / 2;
console.log(media)

if(media < parseFloat(7)){
    console.log( nome + ", infelimente você não ficou acima da média, espero que consiga ultrpassar na próxima vez")
}else{
    console.log("Parabéns " + nome + ",você atingiu a média!!")

}

 
