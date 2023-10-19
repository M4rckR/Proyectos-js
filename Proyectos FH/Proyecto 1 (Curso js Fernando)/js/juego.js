
let deck = []
const tipos = ['C','D','H','S']
const especiales = ['A','J','Q','K']

let puntosJugador = 0
let puntosComputadora = 0

const btnPedir = document.querySelector('#btnPedir')
const btnDetener = document.querySelector('#btnDetener')
const btnNuevo = document.querySelector('#btnNuevo')
const smalls = document.querySelectorAll('small')
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')



//Generar baraja aleatoria
const crearDeck = () => {

    //Generar cartas normales
    for( let i=2; i<=10; i++){
        for( let tipo of tipos){
            deck.push(i+tipo);
        }
    }

    //Genera cartas especiales
    for( let tipo of tipos) {
        for(let esp of especiales)
        deck.push(esp+tipo)
    }

    deck = _.shuffle(deck)
    return deck;
}
crearDeck();


//Tomar carta
const pedirCarta = () => {

    //Si ya no hay cartas me devolvera un erro
    if(deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    //Tomamos la ultima carta y la eliminamos
    const carta = deck[deck.length-1]  
    deck.pop();
    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {
    //Extraemos el valor de la carta sin tener en cuenta el ultimo valor
    const valor = carta.substring(0, carta.length-1)

    //Esto es algo tryhard, pero se resume a que comparamos primero si el valor es 
    //un numero o no y en valor de eso comparamos las letras, sino el valor del numero
    return (isNaN(valor))? ((valor === 'J')? 11:
    (valor === 'Q')? 12 : 13)          
    : Number(valor);
}

//Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora += valorCarta(carta);
        smalls[1].innerText = puntosComputadora;
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')
        divCartasComputadora.append(imgCarta)

        if(puntosMinimos>21){
            break;
        }
    }while((puntosComputadora < puntosMinimos) &&  (puntosMinimos <=21))

    setTimeout(() => {
        
    

    if(puntosComputadora === puntosMinimos) {
        alert('Nadie gana :(');
    } else if(puntosMinimos>21) {
        alert('Computadora gana')
    }  else if(puntosComputadora>21) {
        alert('Jugador gana')
    } else {
        alert('Computadora gana')
    }
    }, 10);
}

//Eventos 
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    smalls[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta')

    divCartasJugador.append(imgCarta)

    if(puntosJugador>21) {
        console.warn('Lo siento muncho, ya perdiste')
        btnPedir.disabled = true
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador)
    } else if (puntosJugador === 21) {
        console.warn('21, Ganaste')
        btnPedir.disabled = true
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador)
        alert('Felicidades, ganaste')
    }
})

btnDetener.addEventListener('click', () => {
    turnoComputadora(puntosJugador)
    btnPedir.disabled = true;
    btnDetener.disabled = true;
})    

btnNuevo.addEventListener('click', () => {
    deck = crearDeck();
    puntosJugador = 0
    puntosComputadora = 0
    smalls[0] = 0;
    smalls[1] = 0
    smalls[0].innerText = 0;
    smalls[1].innerText = 0;
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnPedir.disabled = false
    btnDetener.disabled = false;
})