// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline = require('readline');

// Crea una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el primer número (A)
rl.question('Ingrese el primer número (A): ', (inputA) => {
  // Convierte la entrada del usuario a un número entero
  const A = parseFloat(inputA);

  // Pide al usuario que ingrese el segundo número (B)
  rl.question('Ingrese el segundo número (B): ', (inputB) => {
    // Convierte la entrada del usuario a un número entero
    const B = parseFloat(inputB);

    // Realiza la operación según la condición
    let resultado;
    if (A < 0 || B < 0) {
      resultado = A + B;
      console.log(`La suma de A y B es: ${resultado}`);
    } else {
      resultado = A * B;
      console.log(`El producto de A y B es: ${resultado}`);
    }

    // Cierra la interfaz de lectura
    rl.close();
  });
});
