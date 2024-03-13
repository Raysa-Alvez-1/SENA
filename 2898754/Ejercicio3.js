// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline = require('readline');

// Crea una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el primer número
rl.question('Ingrese el primer número: ', (input1) => {
  // Convierte la entrada del usuario a un número entero
  const numero1 = parseInt(input1);

  // Pide al usuario que ingrese el segundo número
  rl.question('Ingrese el segundo número: ', (input2) => {
    // Convierte la entrada del usuario a un número entero
    const numero2 = parseInt(input2);

    // Pide al usuario que ingrese el tercer número
    rl.question('Ingrese el tercer número: ', (input3) => {
      // Convierte la entrada del usuario a un número entero
      const numero3 = parseInt(input3);

      // Determina el menor y el mayor entre los tres números
      let menor = numero1;
      let mayor = numero1;

      if (numero2 < menor) {
        menor = numero2;
      } else if (numero2 > mayor) {
        mayor = numero2;
      }

      if (numero3 < menor) {
        menor = numero3;
      } else if (numero3 > mayor) {
        mayor = numero3;
      }

      // Muestra el resultado
      console.log(`El número menor es: ${menor}`);
      console.log(`El número mayor es: ${mayor}`);

      // Cierra la interfaz de lectura
      rl.close();
    });
  });
});
