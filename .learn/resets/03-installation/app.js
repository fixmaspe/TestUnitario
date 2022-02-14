// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = (valueInEuro) => {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9
    return valueInYen;
}


// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    return valueInPound;
}
module.exports = { fromEuroToDollar,fromDollarToYen,fromYenToPound };


// solo un registro en consola para nosotros.
// console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// // one euro is:
// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }
// var dollarToEuro = function(dollarValue){
// 	return dollarValue * 0.89;
// }
// var euroToYen = function(euroValue){
// 	return euroValue * 124.15;
// }

// //***** YOUR CODE BELOW ↓ ******///
// var toEu =   dollarToEuro(137);
// var  toyen = euroToYen(toEu)
// console.log(toyen);

