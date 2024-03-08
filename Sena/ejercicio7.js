
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