// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline = require('readline');

// Crea una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese un número
rl.question('Ingrese un número: ', (input) => {
  // Convierte la entrada del usuario a un número
  const numero = parseFloat(input);

  // Verifica si el número es positivo, negativo o cero
  if (numero > 0) {
    console.log("El número ingresado es positivo.");
  } else if (numero < 0) {
    console.log("El número ingresado es negativo.");
  } else {
    console.log("El número ingresado es cero.");
  }

  // Cierra la interfaz de lectura
  rl.close();
});
