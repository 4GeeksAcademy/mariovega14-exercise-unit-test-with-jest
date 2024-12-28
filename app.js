// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 

const oneEuroIs = {
    "JPY": 156.5,  // yen japonés
    "USD": 1.07,   // dólar estadounidense
    "GBP": 0.87    // libra esterlina
};

// Función para convertir dólares a yenes japoneses
function fromDollarToYen(dollars) {
    // Sabemos que 1 EUR = 1.07 USD y 1 EUR = 156.5 JPY
    // Entonces, 1 USD = 156.5 JPY / 1.07
    const usdToYen = oneEuroIs["JPY"] / oneEuroIs["USD"];
    return dollars * usdToYen;
}

// Función para convertir euros a dólares
function fromEuroToDollar(euros) {
    // Sabemos que 1 EUR = 1.07 USD
    return euros * oneEuroIs["USD"];
}

// Función para convertir yenes japoneses a libras esterlinas
function fromYenToPound(yen) {
    // Sabemos que 1 EUR = 156.5 JPY y 1 EUR = 0.87 GBP
    // Entonces, 1 JPY = 0.87 GBP / 156.5 JPY
    const yenToPound = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    return yen * yenToPound;
}



// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};