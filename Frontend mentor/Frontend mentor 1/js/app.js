// Variables
const btnAbrir = document.querySelector('#compartir')
const btnCerrar = document.querySelector('#compartir-2')
const primerSlide = document.querySelector('#primer-slide')
const segundoSlide = document.querySelector('#segundo-slide')

eventListeners()
function eventListeners() {
    btnAbrir.addEventListener('click', abrir)
    btnCerrar.addEventListener('click', cerrar)
}

class UI {
    abrir(){
        segundoSlide.classList.toggle('-translate-x-full')
    }

    cerrar(){
        segundoSlide.classList.toggle('-translate-x-full')
    }
}

const ui = new UI()

// Funciones
function abrir() {
    ui.abrir();
}

function cerrar() {
    ui.cerrar();
}
