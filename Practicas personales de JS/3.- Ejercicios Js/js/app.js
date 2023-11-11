
// 1)Palabras separadas por camel case
const frase = "agenEstaEnamoradoDeUnaAmiga"
function solution(frase) {
    let fraseR = [];
    [...frase].forEach(letra => { letra === letra.toLowerCase()? fraseR.push(letra): fraseR.push(" ", letra)})
    return fraseR.join('')
}
//console.log(solution(frase))


//

