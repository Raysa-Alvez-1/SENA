let sumaCuadrados = 0;
let i = 1;

// Realizar al menos una iteración
do {
    // Sumar el cuadrado de i a sumaCuadrados
    sumaCuadrados += i * i;
    // Incrementar i para pasar al siguiente número
    i++;
} while (i <= 100); // Iterar mientras i sea menor o igual a 100

// Mostrar el resultado en pantalla
console.log("La suma de los cuadrados de los cien primeros números naturales es:", sumaCuadrados);


