// Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua 
// situação em relação ao alistamento militar. - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o 
// alistamento. - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do 
// alistamento. 

let idade = parseInt(prompt("Informe sua idade:"));

if (idade < 18) {
    console.log("Faltam " + (18 - idade) + " anos para você se alistar!");
} else if (idade > 18) {
    console.log("Você está atrasado! Já se passaram " + (idade - 18) + " anos para se alistar!");
} else {
    console.log("Está na hora de se alistar este ano!");
}
