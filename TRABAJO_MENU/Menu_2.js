// Operadores
console.log( "Operadores")

// punto1.js
console.log( " Punto1")
console.log("ingrese basee");
let base = 5;
console.log("ingrese altura");
let altura = 5;

let resultado_1 = (base * altura )/2;

console.log(resultado_1);

// punto2.js
console.log( " Punto2")
// entrada
console.log(" 2. Ingresar dos numeros por teclado y sumarlos: ");
console.log("Ingrese primer_numero");
let primer_numero = 34;
console.log("Ingrese segundo_numero");
let segundo_numero = 24;
// proceso 
let resultado_2 = primer_numero + segundo_numero;
// salida
console.log(resultado_2);

// punto3.js
console.log( " Punto3")
// entrada
console.log("ingresar un numero y visualizar el numero elevado al cuadrado");
console.log("ingrese un numero");
let numero = 6;
console.log("ingrese un elevado");
let elevado = 2;
// proceso
let resultado_3 = numero * numero;
// salida 
console.log(resultado_3);

// punto4.js
console.log( " Punto4")
// entrada
console.log("Escribir un algoritmo que convierta de euros a dólares");
console.log("ingrese euros");
let euros = 456; 
console.log("ingrese tasaCambio");
let tasaCambio = 1.18;
// Proceso: Supongamos una tasa de cambio fija (1 euro = 1.18 dólares)
let resultado_dolares = euros * tasaCambio;
// Salida: Mostrar el resultado en dólares
console.log(resultado_dolares);

// punto5.js
console.log( " Punto5")
// entrada
console.log("escribir un algoritmo que pida el lado de un cuadrado y muestre el valor del área y del perímetro");
console.log("escribe un lado de un cuadrado");
let lado = 4;
console.log("muestre el area");
let area = 5;
console.log("muestre el perimetro");
let perimetro = 6;
// proceso
let resultado_area = lado * perimetro;
let resultado_perimetro = lado * area;
// salida
console.log(resultado_area);
console.log(resultado_perimetro);

// punto6.js
console.log( " Punto6")
// entradas
console.log("ingrese cilindro");
let cilindro = 4;
console.log("ingrese area");
let area1 = 5;
console.log("ingrese volumen");
let volumen = 7;
// proceso
let resultado_area1 = volumen * cilindro;
let resultado_volumen = area * cilindro;
// salida
console.log(resultado_area);
console.log(resultado_volumen);

// punto7.js
console.log( " Punto7")
// Entrada: Leer el radio de la circunferencia
console.log("Realizar un algoritmo que lea el radio de una circunferencia y escriba la longitud de la misma y el área (pi*r)^2 del círculo inscrito")
let radio = 7;
// Proceso: Calcular la longitud de la circunferencia y el área del círculo inscrito
const pi = Math.PI;
let resultado_longitudCircunferencia = 2 * pi * radio;
let resultado_areaCirculoInscrito = pi * Math.pow(radio, 2);
// Salida: Mostrar los resultados
console.log(resultado_longitudCircunferencia);
console.log(resultado_areaCirculoInscrito);

// punto8.js
console.log( " Punto8")
// entrada
console.log("Calcular el promedio de tres (3) números ingresados por teclado");
console.log("ingrese numero1");
let numero1 = 54;
console.log("ingrese numero2");
let numero2 = 90;
console.log("ingrese numero3");
let numero3 = 80;

// Proceso: Calcular el promedio
let resultado_promedio = (numero1 + numero2 + numero3) / 3;

// Salida: Mostrar el resultado
console.log(resultado_promedio);

// Condicionales
console.log( "Condicionales")

// ejercicio1.js
console.log( "ejercicio1")
const readline_1 = require('readline');

const rl_1 = readline_1.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar al usuario que ingrese un número
rl_1.question("Por favor, ingresa un número: ", (numero) => {
  numero = parseFloat(numero);

  // Verificar si el número es positivo, negativo o cero
  if (!isNaN(numero)) {
    if (numero > 0) {
      console.log("El número ingresado es positivo.");
    } else if (numero < 0) {
      console.log("El número ingresado es negativo.");
    } else {
      console.log("El número ingresado es cero.");
    }
  } else {
    console.log("¡Debes ingresar un número válido!");
  }

  rl_1.close();
});



// ejercicio2.js
console.log( "ejercicio2")
// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline_2= require('readline');

// Crea una interfaz de lectura
const rl_2 = readline_2.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el primer número
rl_2.question('Ingrese el primer número: ', (input1) => {
  // Convierte la entrada del usuario a un número
  const numero1 = parseFloat(input1);

  // Pide al usuario que ingrese el segundo número
  rl_2.question('Ingrese el segundo número: ', (input2) => {
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
      rl_2.close();
      return;
    }

    // Muestra el resultado
    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}`);

    // Cierra la interfaz de lectura
    rl_2.close();
  });
});

// ejercicio3.js
console.log( "ejercicio3")
// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline_3 = require('readline');

// Crea una interfaz de lectura
const rl_3 = readline_3.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el primer número
rl_3.question('Ingrese el primer número: ', (input1) => {
  // Convierte la entrada del usuario a un número entero
  const numero1 = parseInt(input1);

  // Pide al usuario que ingrese el segundo número
  rl_3.question('Ingrese el segundo número: ', (input2) => {
    // Convierte la entrada del usuario a un número entero
    const numero2 = parseInt(input2);

    // Pide al usuario que ingrese el tercer número
    rl_3.question('Ingrese el tercer número: ', (input3) => {
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
      rl_3.close();
    });
  });
});

// ejercicio4.js
console.log( "ejercicio4")
// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline_4 = require('readline');

// Crea una interfaz de lectura
const rl_4 = readline_4.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el primer número
rl_4.question('Ingrese el primer número (A): ', (inputA) => {
  // Convierte la entrada del usuario a un número entero
  const A = parseInt(inputA);

  // Pide al usuario que ingrese el segundo número
  rl_4.question('Ingrese el segundo número (B): ', (inputB) => {
    // Convierte la entrada del usuario a un número entero
    const B = parseInt(inputB);

    // Realiza la operación según la condición
    let resultado;
    if (A < B) {
      resultado = A + B;
      console.log(`La suma de A y B es: ${resultado}`);
    } else {
      resultado = A - B;
      console.log(`La resta de A y B es: ${resultado}`);
    }

    // Cierra la interfaz de lectura
    rl_4.close();
  });
});

// ejercicio5.js
console.log( "ejercicio5")
// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline_5 = require('readline');

// Crea una interfaz de lectura
const rl_5 = readline_5.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el primer número (A)
rl_5.question('Ingrese el primer número (A): ', (inputA) => {
  // Convierte la entrada del usuario a un número
  const A = parseFloat(inputA);

  // Pide al usuario que ingrese el segundo número (B)
  rl_5.question('Ingrese el segundo número (B): ', (inputB) => {
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
    rl_5.close();
  });
});

// ejercicio6.js
console.log( "ejercicio6")
// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline_6 = require('readline');

// Crea una interfaz de lectura
const rl_6 = readline_6.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el primer número (A)
rl_6.question('Ingrese el primer número (A): ', (inputA) => {
  // Convierte la entrada del usuario a un número entero
  const A = parseFloat(inputA);

  // Pide al usuario que ingrese el segundo número (B)
  rl_6.question('Ingrese el segundo número (B): ', (inputB) => {
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
    rl_6.close();
  });
});

// ejercicio7.js
console.log( "ejercicio7")
// Función para determinar si un año es bisiesto
function esBisiesto(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

// Importa el módulo 'readline' para leer la entrada del usuario desde la consola
const readline_7 = require('readline');

// Crea una interfaz de lectura
const rl_7 = readline_7.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pide al usuario que ingrese el año
rl_7.question('Ingrese un año: ', (input) => {
  // Convierte la entrada del usuario a un número entero
  const year = parseInt(input);

  // Verifica si el año es bisiesto usando la función
  if (esBisiesto(year)) {
    console.log(`${year} es un año bisiesto.`);
  } else {
    console.log(`${year} no es un año bisiesto.`);
  }

  // Cierra la interfaz de lectura
  rl_7.close();
});





// Ciclos
console.log( "Ciclos")

// actividad1.js
console.log( " actividad1")
// Imprimir todos los múltiplos de 3 que hay entre 1 y 100.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// actividad2.js
console.log( " actividad2")
// Imprimir los números impares entre 0 y 100
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}


// actividad3.js
console.log( " actividad3")
// Imprimir los números pares del 1 al 100
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}


// actividad4.js
console.log( " actividad4")
// Escribir un programa que imprima por pantalla los cuadrados de los números del 1 al 30
for (let i = 1; i <= 30; i++) {
    // Calcular el cuadrado de cada número
    let cuadrado = i * i;
    // Imprimir el cuadrado
    console.log("El cuadrado de", i, "es", cuadrado);
}


// actividad5.js
console.log( " actividad5")
// Escribir un programa que sume los cuadrados de los cien primeros números naturales, mostrando el resultado en pantalla
// Variable para almacenar la suma de los cuadrados
let sumaCuadrados = 0;

// Iterar sobre los cien primeros números naturales
for (let i = 1; i <= 100; i++) {
    // Calcular el cuadrado de cada número y sumarlo a la variable sumaCuadrados
    sumaCuadrados += i * i;
}

// Mostrar el resultado en pantalla
console.log("La suma de los cuadrados de los cien primeros números naturales es:", sumaCuadrados);


// actividad6.js
console.log( " actividad6")
// Dados dos números naturales, el primero menor que el segundo, generar y mostrar todos los números comprendidos entre ellos en secuencia ascendente
// Definir los dos números naturales
const numeroInicial = 5;
const numeroFinal = 12;

// Verificar que el primer número sea menor que el segundo
if (numeroInicial < numeroFinal) {
    // Iterar sobre los números comprendidos entre el primero y el segundo
    for (let i = numeroInicial + 1; i < numeroFinal; i++) {
        console.log(i);
    }
} else {
    console.log("El primer número debe ser menor que el segundo.");
}


