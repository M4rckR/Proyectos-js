'use strict'

const marcos = {
    nombre: "Marcos",
    apellido: "Romero",
    edad: 15,
    saludo: function(){
        console.log(`${this.nombre}, ese es mi nombre`);
    },

    enamoradas : {
        nombres: ["Shirley","Valery","Maricielo"],
    }
}

marcos.altura = 1.75

// marcos.saludo()
// console.log(marcos.altura);

// console.log(marcos.enamoradas.nombres);

// const {enamoradas: {nombres}} = marcos

// console.log(nombres[2]);

Object.freeze(marcos)
Object.seal(marcos)


// const frases = [1,2,3];
// frases.push("Hola");
// console.log(frases);