// Variables
const btnAbrir = document.querySelector('#compartir')
const btnCerrar = document.querySelector('#compartir-2')
const primerSlide = document.querySelector('#primer-slide')
const segundoSlide = document.querySelector('#segundo-slide')

eventListeners()
function eventListeners() {
    btnAbrir.addEventListener('click', abrir)
    btnCerrar.addEventListener('click', cerrar)


        if (window.innerWidth >= 768) {
            // Ejecutar evento para tamaño máximo
            btnAbrir.addEventListener('click', toggleReds)
        } else {
            // Ejecutar evento para tamaño mínimo
            abrir();
            cerrar();
        }
    
}

class UI {
    abrir(){
        segundoSlide.classList.toggle('-translate-x-full')
    }

    cerrar(){
        segundoSlide.classList.toggle('-translate-x-full')
    }

    toggleReds(){
        // segundoSlide.classList.add('md:opacity-visible')
        segundoSlide.classList.toggle('md:opacity-0')
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


function toggleReds() {
    ui.toggleReds();
}