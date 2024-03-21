// Importar el módulo readline para manejar la entrada y salida de datos
const readline = require('readline');

// Crear una interfaz readline para leer desde la entrada estándar (teclado)
const rl = readline.createInterface({
  input: process.stdin, // Establecer la entrada como el teclado
  output: process.stdout // Establecer la salida como la consola
});

// Variable para almacenar la suma de los números ingresados por el usuario
let suma = 0;

// Función para solicitar números al usuario y sumarlos
function sumarNumeros() {
  // Preguntar al usuario que ingrese un número
  rl.question('Ingrese un número (0 para terminar): ', (numero) => {
    // Convertir la entrada del usuario a un número de punto flotante
    const num = parseFloat(numero);
    
    // Verificar si el número ingresado es diferente de cero y es un número válido
    if (num !== 0 && !isNaN(num)) {
      // Si el número no es cero y es válido, agregarlo a la suma total
      suma += num;
      // Llamar recursivamente a la función para solicitar otro número
      sumarNumeros();
    } else {
      // Si se ingresa cero o un valor no numérico, mostrar la suma total
      console.log(`La suma de los números ingresados es: ${suma}`);
      // Cerrar la interfaz readline para finalizar el programa
      rl.close();
    }
  });
}

// Llamar a la función para comenzar a solicitar números al usuario
sumarNumeros();

