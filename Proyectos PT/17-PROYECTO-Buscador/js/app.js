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
    mostrarAutos(autos); //Muestra automoviles al cargar

    // llena las opciones de año
    llenarSelect()
})


// Event listener para los select de busqueda 
marca.addEventListener('change', (e) => {
    datoBusqueda.marca = e.target.value;
    filtrarAuto();
})
year.addEventListener('change', (e) => {
    datoBusqueda.year = e.target.value;
    filtrarAuto();
})
minimo.addEventListener('change', (e) => {
    datoBusqueda.minimo = e.target.value;
    filtrarAuto();
    
})
maximo.addEventListener('change', (e) => {
    datoBusqueda.maximo = e.target.value;
    filtrarAuto();
    
})
puertas.addEventListener('change', (e) => {
    datoBusqueda.puertas = e.target.value;
    filtrarAuto();
    
})
transmision.addEventListener('change', (e) => {
    datoBusqueda.transmision = e.target.value;
    filtrarAuto();
    
})
color.addEventListener('change', (e) => {
    datoBusqueda.color = e.target.value;
    filtrarAuto();
    // console.log(datoBusqueda);
    
})


// FUnciones
function mostrarAutos(autos) {
    limpiarHtml(); // Elimina el html previo
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

function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
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
    const resultado = autos.filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor)

    // console.log(resultado);
    if(resultado.length){
        mostrarAutos(resultado)
    }
    else{
        noResultado();
    }
    
}

function filtrarMarca(auto){
    const {marca} = datoBusqueda
    if(marca){
        return auto.marca === marca;
    }
    else {
        return auto
    }
}
function filtrarYear(auto){
    const {year} = datoBusqueda
    if(year){
        return auto.year === parseInt(year);
    }
    else {
        return auto
    }
}
function filtrarMinimo(auto){
    const {minimo} = datoBusqueda
    if(year){
        return auto.precio >= minimo;
    }
    else {
        return auto
    }
}

function filtrarMaximo(auto){
    const {maximo} = datoBusqueda
    if(maximo){
        return auto.precio <= maximo;
    }
    else {
        return auto
    }
}
function filtrarPuertas(auto){
    const {puertas} = datoBusqueda
    if(puertas){
        return auto.puertas === parseInt(puertas);
    }
    else {
        return auto
    }
}

function filtrarTransmision(auto){
    const {transmision} = datoBusqueda
    if(transmision){
        return auto.transmision === transmision;
    }
    else {
        return auto
    }
}

function filtrarColor(auto){
    const {color} = datoBusqueda
    if(color){
        return auto.color === color;
    }
    else {
        return auto
    }
}


function noResultado(){
    limpiarHtml()
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta')
    noResultado.classList.add('error')
    noResultado.textContent = "No hay contenido"
    resultado.appendChild(noResultado)

}