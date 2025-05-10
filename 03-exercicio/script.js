// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não 
// BISSEXTO. 
function Bissexto(ano){
  if((ano % 4 === 0 && ano % 100 !==0) || ano % 400 === 0) {
    return true;
} else{
    return false
}
}

let ano = parseInt(prompt("Informe um ano:"))

if (Bissexto(ano)){
   console.log("é bissexto")
}else{
console.log("não é bissexto")

}