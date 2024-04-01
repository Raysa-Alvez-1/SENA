// funcion 1
// Ejemplo de función de flecha
const square = (x) => x * x;

// Llamada a la función de flecha e impresión del resultado
console.log(square(5)); 

// funcion2 
// Función de flecha con múltiples parámetros
const multiply = (a, b) => a * b;

// Llamada a la función de flecha e impresión del resultado
console.log(multiply(3, 4)); 


// funcion3
// Ejemplo de uso de funciones de flecha en métodos de array
const numbers = [1, 2, 3, 4, 5];

// Utilizando la función de flecha en el método map para obtener el cuadrado de cada número
const squaredNumbers = numbers.map(x => x * x);

// Imprimir el array resultante
console.log(squaredNumbers); 