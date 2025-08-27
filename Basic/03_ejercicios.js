// 1. Escribe un comentario en una línea
// Este es un comentario de una sola línea

// 2. Escribe un comentario en varias líneas
/*
  Este es un comentario
  que abarca varias líneas
*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// Number
let num1 = 23;
let num2 = 3.14;

//String
let cadenna = "String";

// Boolean
let boleano = true;
let boleano2 = false;

// Undefined
let indefinido;

// BigInt
let BigInt = 123456789012345678901234567890n;

// Null
let varNulo = null;

// Symbol
let simbolo = Symbol("simbolo");
// 4. Imprime por consola el valor de todas las variables
console.log("IMPRESIÓN DE LOS VALORES DE CADA VARIABLE \n",num1, "\n", num2, "\n", cadenna, "\n", boleano, "\n", boleano2, "\n", indefinido, "\n", BigInt, "\n", varNulo, "\n", simbolo, "\n\n IMPRESIÓN DEL TIPO DE DATO DE LAS VARIABLES \n");
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof num1, "\n", num2, "\n", cadenna, "\n", boleano, "\n", boleano2, "\n", indefinido, "\n", BigInt, "\n", varNulo, "\n", simbolo);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
let variable1 = 4;
console.log(variable1);
variable1 = 8;
console.log(variable1);
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
let edad = 22;
console.log("Impresión uno",edad);

edad = "veintidos";
console.log("Impresión dos",edad);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const edadUno= 20;
const altura = 1.50;

const cadena = "Hola JS"

const isStudent = true;
const isTeacher = false;

//const noDefinido;

const valorNUlo = null;

const sym = Symbol("sym")

const enteBig = 41508174108934710874114891709438n;


// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse