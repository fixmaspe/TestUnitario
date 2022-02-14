
describe("Pruebas sobre la funcion calculo moneda", () => {
   
    const { fromEuroToDollar } = require('./app.js')

    test("One Euro should be 1.2 dollars", function(){    
        // hago mi comparacion (la prueba)
        expect(fromEuroToDollar(1)).toBe(1.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    });
    test("1 euro should be 127.9 Yenes", function(){   
        
        const { fromDollarToYen } = require('./app.js')

        // hago mi comparacion (la prueba)
        expect(fromDollarToYen(1.2)).toBe(127.9); //1,2 dollar es 1 euro sy este son 127,9 Yenes, entonces 1 euro deberian ser = ( 1 * 127.9)
    });
    test("127 Yenes son 0.8 Pound", function(){   
        
        const { fromYenToPound } = require('./app.js')

        // hago mi comparacion (la prueba)
        expect(fromYenToPound(127.9)).toBe(0.8); //127 Yenes son 0.8 Pound 
    });
});