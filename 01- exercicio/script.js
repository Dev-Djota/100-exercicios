// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba 
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida. 

let veloCarro = parseInt(prompt("Esse carro estava a quanto por km/h?"))
if(veloCarro >= 80){
    const multa = veloCarro * 5;
    console.log("o senhor foi multado em " + multa + " R$, Por favor,compareça ao detran mais proximo para que isso seja resolvido.")
}else{
    console.log("Boa viagem, meu nobre")

}