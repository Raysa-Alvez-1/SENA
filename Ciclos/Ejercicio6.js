// Definir los dos números naturales
let primerNumero = 5;
let segundoNumero = 12;

// Verificar si el primer número es menor que el segundo
if (primerNumero < segundoNumero) {
    let numeroActual = primerNumero; // Inicializar el número actual con el primer número

    // Utilizar do-while para mostrar los números en secuencia ascendente
    do {
        console.log(numeroActual); // Mostrar el número actual
        numeroActual++; // Incrementar el número actual para pasar al siguiente
    } while (numeroActual <= segundoNumero); // Continuar mientras el número actual sea menor o igual que el segundo
} else {
    console.log("El primer número debe ser menor que el segundo.");
}