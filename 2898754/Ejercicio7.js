// Función para determinar si un año es bisiesto
function esBisiesto(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline = require('readline');

// Crea una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el año
rl.question('Ingrese un año: ', (input) => {
  // Convierte la entrada del usuario a un número entero
  const year = parseInt(input);

  // Verifica si el año es bisiesto usando la función
  if (esBisiesto(year)) {
    console.log(`${year} es un año bisiesto.`);
  } else {
    console.log(`${year} no es un año bisiesto.`);
  }

  // Cierra la interfaz de lectura
  rl.close();
});
