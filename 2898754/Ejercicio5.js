// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline = require('readline');

// Crea una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el primer número (A)
rl.question('Ingrese el primer número (A): ', (inputA) => {
  // Convierte la entrada del usuario a un número
  const A = parseFloat(inputA);

  // Pide al usuario que ingrese el segundo número (B)
  rl.question('Ingrese el segundo número (B): ', (inputB) => {
    // Convierte la entrada del usuario a un número
    const B = parseFloat(inputB);

    // Verifica si el divisor es cero
    if (B === 0) {
      console.log("La división no es posible porque el divisor es cero.");
    } else {
      // Realiza la división y muestra el resultado
      const cociente = A / B;
      console.log(`El cociente entre A y B es: ${cociente}`);
    }

    // Cierra la interfaz de lectura
    rl.close();
  });
});
