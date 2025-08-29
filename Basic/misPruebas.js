//* Este sera mi archivo personal para hacer mis propias pruebas a lo largo de todo el curso.


//! PRUEBA PARA PROBAR LA MUTABILIDAD DE UN OBJETO CON "CONST".
const persona = {
    nombre: "Ana"
};
console.log(persona.nombre); // "Ana"


persona.nombre = "Laura"; // ✅ Esto es válido
console.log(persona.nombre); // "Laura"

//! PRUEBA PARA PROBAR LA MUTABILIDAD DE UN ARRAY CON "CONST".

const arreglo = { 
    arre1 :[1,2,3,4]
};
console.log(arreglo);

arreglo.arre1 = [4,3,2,1]
console.log(arreglo);

