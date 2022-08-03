'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numero = 0;
  let array = num.split("").reverse();  
       for(let i = 0; i < array.length; i++){
          numero += (array[i]) * (2 ** i) 
  }
  return numero;
}

function DecimalABinario(num) {
  // tu codigo aca
  let almacenado = [];
  while(num > 0 ){
   almacenado.unshift(num % 2)
   num = Math.floor(num / 2)
   num
  }
return almacenado.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}