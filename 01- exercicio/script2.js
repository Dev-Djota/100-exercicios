// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade 
// dela e depois mostre se ela pode ou não votar.

let idade = parseInt(prompt("Informe seu ano de nascimento:"))
let idadeVoto = 2025 - idade;
if(idadeVoto < 18){
    console.log("Infelimente Você ainda não tem direito ao voto,volte aqui a alguns anos!")
}else{
    console.log("Entre e se direione a cabine e vote em alguém de sua preferência")

}