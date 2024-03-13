// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline = require('readline');

// Crea una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el primer número
rl.question('Ingrese el primer número: ', (input1) => {
  // Convierte la entrada del usuario a un número
  const numero1 = parseFloat(input1);

  // Pide al usuario que ingrese el segundo número
  rl.question('Ingrese el segundo número: ', (input2) => {
    // Convierte la entrada del usuario a un número
    const numero2 = parseFloat(input2);

    // Determina el mayor y el menor entre los dos números
    let mayor, menor;
    if (numero1 > numero2) {
      mayor = numero1;
      menor = numero2;
    } else if (numero1 < numero2) {
      mayor = numero2;
      menor = numero1;
    } else {
      console.log("Ambos números son iguales.");
      rl.close();
      return;
    }

    // Muestra el resultado
    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}`);

    // Cierra la interfaz de lectura
    rl.close();
  });
});
