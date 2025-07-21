//* Cuando hablamos de tipos de datos primitsivos en JavaScript, nos debemos de quedar con siete tipos de datos:

//* 1.- String (las cadenas de texto)
let myName = "José Alfonso";

//* 2.- Number (los números entero y/o decimaales)
let age = 30; // Entero
let height = 1.75; // Decimal

//* 3.- Boolean (los booleanos, son valores lógicos, verdadero o falso)
let isStudent = true; // Verdadero
let isTeacher = false; // Falso


//* 4.- Undefined (una variable que no tiene un valor asignado)
let notAssigned; // Undefined (no tiene ningún valor asignado)
console.log(notAssigned); //! Imprime: undefined

//* 5.- Null (una variable que tiene un valor nulo)
let nullValue = null; //! Null (no tiene ningún valor asignado)

//* 6.- Symbol (un valor único e inmutable, usado para identificar propiedades de objetos)
let uniqueSymbol = Symbol("unique"); //! Crea un símbolo único

//* 7.- BigInt (un tipo de dato para representar números enteros grandes)
let bigIntValue = BigInt(123456789012345678901234567890); //! Esta es una manera de representar un BigInt
let anotherBigInt = 123456789012345678901234567890n; //! Esta es la otra manera como podemos representar un BigInt

//* Método para conocer el tipo de dato de una variable
console.log(typeof myName); // Imprime: string
console.log(typeof age); // Imprime: number
console.log(typeof isStudent); // Imprime: boolean
console.log(typeof notAssigned); // Imprime: undefined
console.log(typeof nullValue); // Imprime: object (esto es un comportamiento peculiar de JavaScript)
console.log(typeof uniqueSymbol); // Imprime: symbol
console.log(typeof bigIntValue); // Imprime: bigint
console.log(typeof anotherBigInt); // Imprime: bigint