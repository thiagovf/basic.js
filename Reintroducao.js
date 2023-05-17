// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Language_overview


// NÚMEROS

/**
 * Números em JavaScript são "valores de precisão dupla no formato IEEE 754", 
 * de acordo com a especificação. Isto tem algumas consequências interessantes.  
 */ 

let floatDefault = 0.1 + 0.2
console.log(floatDefault)

let bin = parseInt("11", 2)
console.log(bin)
let float = parseFloat(bin)
console.log(float)
console.log(isNaN(NaN))

/**
 * JavaScript também tem os valores especiais Infinity e -Infinity:
 */
console.log(1 / 0)
console.log(-1 / 0)


// STRINGS