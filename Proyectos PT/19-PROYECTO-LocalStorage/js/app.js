// Variables
const formulario = document.querySelector('#formulario');   
const listaTweets = document.querySelector('#lista-tweets');
let tweets = []

// Event listener

eventListeners();

function eventListeners(){
    // CUando el usuario agrega twieet
    formulario.addEventListener('submit', agregarTweet)

    document.addEventListener('DOMContentLoaded', ()=> {
        tweets = JSON.parse(localStorage.getItem('tweets')) || []
        console.log(tweets);
        crearHtml();
    })
}


// FUnciones


function agregarTweet(e){
    e.preventDefault()
    // TEXT AREAR

    const tweet = document.querySelector('#tweet').value;
    // console.log(tweet);

    // Validacion
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio')
        return;
    }
    const tweetObj = {
        id:  Date.now(),
        tweet
    }
    // Añadir al arreglo de tweets 
    tweets = [...tweets, tweetObj];

    console.log(tweets);

    crearHtml()


    // Reiniciar formuario
    formulario.reset()

}

function mostrarError(error){
    limpiarHtml();
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido

    const contenido  = document.querySelector('#contenido');
    contenido.appendChild(mensajeError)
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

function limpiarHtml(){
    const contenido  = document.querySelector('#contenido');
    if(contenido.children[1]){
        contenido.children[1].remove();
    }
}

// Muestra un listado de los twwets
function crearHtml(){
    limpiarTweets();
    if(tweets.length>0){
        tweets.forEach(tweet => {
            // Boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.innerText= 'X'

            // FUncion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('li');
            li.innerText = tweet.tweet; 
            li.appendChild(btnEliminar)
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function limpiarTweets(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

// Elimina twit
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id!= id)
    crearHtml();
}