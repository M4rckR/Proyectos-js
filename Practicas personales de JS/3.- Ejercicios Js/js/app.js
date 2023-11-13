
// 1)Palabras separadas por camel case
//+const frase = "agenEstaEnamoradoDeUnaAmiga"
function solution(frase) {
    let fraseR = [];
    [...frase].forEach(letra => { letra === letra.toLowerCase()? fraseR.push(letra): fraseR.push(" ", letra)})
    return fraseR.join('')
}
//console.log(solution(frase))

// 2) Numero impares ordenados
//const numeros =[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
function sortArray(arreglo) {
    let arregloImpar = arreglo.filter(digito => digito%2 !== 0).sort(function (a,b) {return a-b}),
        arregloFinal = [], indiceImpar = 0;
    arreglo.forEach((numero) => {
        if(numero%2 === 0){
            arregloFinal.push(numero)
            return
        }
        arregloFinal.push(arregloImpar[indiceImpar])
        indiceImpar++
    })
    return arregloFinal
}
//console.log(sortArray(numeros))

// 3) Letras en orden

let frase = 'ABBCcAD'

var uniqueInOrder=function(iterable){
    let code = []
    iterable.forEach(numero => {
        code.push(numero.charCodeAt())
    })
    return code
}

console.log(uniqueInOrder(fras  e))