// Variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado')
const max = new Date().getFullYear();
const min = max-10;

// Contenedor para los resultados


// Generar un objeto con la busqueda

const datoBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}

// Eventos
document.addEventListener('DOMContentLoaded', ()=> {
    mostrarAutos(); //Muestra automoviles al cargar

    // llena las opciones de año
    llenarSelect()
})


// Event listener para los select de busqueda 
marca.addEventListener('change', (e) => {
    datoBusqueda.marca = e.target.value;
    filtrarAuto()
    
})
year.addEventListener('change', (e) => {
    datoBusqueda.year = e.target.value;
    
})
minimo.addEventListener('change', (e) => {
    datoBusqueda.minimo = e.target.value;
    
})
maximo.addEventListener('change', (e) => {
    datoBusqueda.maximo = e.target.value;
    
})
puertas.addEventListener('change', (e) => {
    datoBusqueda.puertas = e.target.value;
    
})
transmision.addEventListener('change', (e) => {
    datoBusqueda.transmision = e.target.value;
    
})
color.addEventListener('change', (e) => {
    datoBusqueda.color = e.target.value;
    console.log(datoBusqueda);
    
})


// FUnciones
function mostrarAutos() {
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto
        const autoHTML = document.createElement('p');
        autoHTML.textContent= `
            ${marca} - ${modelo} - ${year} - ${puertas} - &${transmision} - ${precio} - ${color}
        `

        resultado.appendChild(autoHTML)
    })

    // Insertar en el  html
    
}

function llenarSelect(){
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)
    }
}

// FUncion que filtra en base ala busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca);

    console.log(resultado);
}

function filtrarMarca(auto){
    if(datoBusqueda.marca){
        return auto.marca === datoBusqueda.marca;
    }
    else {
        return auto
    }
}