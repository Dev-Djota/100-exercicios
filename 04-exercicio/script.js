//  Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos 
// para todos, mas especialmente para mulheres. Faça um programa que leia nome, 
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo 
// // // que: - Homens ganham 5% de desconto - Mulheres ganham 13% de desconto
const nome = prompt("Digite seu nome:");
const sexo = prompt("Digite seu sexo (M para mulher, H para homem):").toUpperCase();
const valorCompra = parseFloat(prompt("Digite o valor da compra:"));

let desconto;

switch (sexo) {
  case "M":
    desconto = 0.13;
    break;
  case "H":
    desconto = 0.05;
    break;
  default:
    desconto = 0;
    alert("Sexo não reconhecido. Nenhum desconto aplicado.");
    break;
}

const valorFinal = valorCompra * (1 - desconto);

alert(`Olá, ${nome}! O valor com desconto é R$ ${valorFinal.toFixed(2)}.`);