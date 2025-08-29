//* 1. Escribe un comentario en una línea
// Este es un comentario de una sola línea

//* 2. Escribe un comentario en varias líneas
/*
  Este es un comentario
  que abarca varias líneas
*/
//* 3. Declara variables con valores asociados a todos los datos de tipo primitivos

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


//* 4. Imprime por consola el valor de todas las variables
console.log(
  "IMPRESIÓN DE LOS VALORES DE CADA VARIABLE \n",num1, "\n", num2, "\n", cadenna, "\n", boleano, "\n", boleano2, "\n", indefinido, "\n", BigInt, "\n", varNulo, "\n", simbolo, "\n\n IMPRESIÓN DEL TIPO DE DATO DE LAS VARIABLES \n"
);


//* 5. Imprime por consola el tipo de todas las variables
console.log(typeof num1, "\n", num2, "\n", cadenna, "\n", boleano, "\n", boleano2, "\n", indefinido, "\n", BigInt, "\n", varNulo, "\n", simbolo);


//* 6. A continuación, modifica los valores de las variables por otros del mismo tipo
// Number
num1 = 15;
num2 = 3.1416;

//String
cadenna = "Nuevo String";

// Boolean
boleano = false;
boleano2 = true;

// Undefined
indefinido; // Creo que no se puede cambiar una variable de tipo "undefined"

// BigInt
BigInt = 12341234740918741438176374193871437619813487n;

// Null
varNulo = null; // Creo que no se puede cambiar una variable de tipo "null"

// Symbol
simbolo = Symbol("nuevo-simbolo");

console.log(
  "IMPRESIÓN DE LOS NUEVOS VALORES DE CADA VARIABLE \n",num1, "\n", num2, "\n", cadenna, "\n", boleano, "\n", boleano2, "\n", indefinido, "\n", BigInt, "\n", varNulo, "\n", simbolo
);


//* 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// Number
num1 = "quince";
num2 = "Número PI";

//String
cadenna = 1234;

// Boolean
boleano = "Cadena false";
boleano2 = "Cadena true";

// Undefined
indefinido; // Creo que no se puede cambiar una variable de tipo "undefined"

// BigInt
BigInt = "Cadena 12341234740918741438176374193871437619813487n";

// Null
varNulo = "Cadena null"; // Creo que no se puede cambiar una variable de tipo "null"

// Symbol
simbolo = Symbol(987);

console.log(
  "IMPRESIÓN DE LOS NUEVOS VALORES DE CADA VARIABLE \n","VARIABLES NUMERICAS",num1, "\n", num2, "\n", "VARAIBLE STRING",cadenna, "\n", "VARIABLES BOOLEANAS",boleano, "\n", boleano2, "\n", "VARIABLE UNDEFINED",indefinido, "\n", "VARIABLE BIGINT",BigInt, "\n", "VARIBLE NULL",varNulo, "\n", "VARIABLE SIMBOLO",simbolo
);



//* 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const edadUno= 20;
const altura = 1.50;

const cadena = "Hola JS"

const isStudent = true;
const isTeacher = false;

//const noDefinido; //* Creo que no se pueden declarar constantes sin antes ser DEFINIDAS.

const valorNUlo = null;

const sym = Symbol("sym")

const enteBig = 41508174108934710874114891709438n;


//* 9. A continuación, modifica los valores de las constantes


//! Los valores de las VARIABLES DE TIPO PRIMIVOS no pueden ser cambiados ya que se les consideran VALORES INMUTABLES.

//? Los valores de las variables que no son PRIMITIVAS, SI se pueden cambiar ya que se consideran valores mutables.

//* PRUEBA PARA PROBAR LA MUTABILIDAD DE UN OBJETO CON "CONST".
const persona = {
    nombre: "Ana"
};
console.log("Impresión del objeto (nombre): ",persona.nombre, "<- ANTES de ser cambiado."); // "Ana"


persona.nombre = "Laura"; // ✅ Esto es válido
console.log("Impresión del objeto (nombre):",persona.nombre, " <- DESPUÉS de ser cambiado."); // "Laura"

//* PRUEBA PARA PROBAR LA MUTABILIDAD DE UN ARRAY CON "CONST".

const arreglo = { 
    arre1 :[1,2,3,4]
};
console.log(arreglo);

arreglo.arre1 = [4,3,2,1]
console.log(arreglo);


//* 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
