
const d = document;
const listadoPlatos = d.querySelector('.carro__contenido')
const precioTotalC = d.querySelector('.carro__soles')
const btnVaciarCarrito = d.querySelector('.vaciar-carrito')
const itemCarro = d.querySelector('.carro ')
let articulosPlato = []
let precioTotal = 0;

document.addEventListener('DOMContentLoaded',() => {

    contenidoDefecto();
    const listaPlatos = d.querySelector('.menu');
    listaPlatos.addEventListener('click', procesarPlato)
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
    itemCarro.addEventListener('click', eliminarPlato);
})

function vaciarCarrito(e){
    e.preventDefault();
    articulosPlato = []
    limpiarHtml()
    precioTotal = 0;
    precioTotalC.textContent = 'S/0.00';
    contenidoDefecto();
}

function eliminarPlato(e){
    e.preventDefault();
    if(e.target.parentElement.classList.contains('eliminar-plato')){
        const platoId = e.target.parentElement.getAttribute('data-id')
        const platoEliminar = articulosPlato.filter(plato => plato.id === platoId);
        precioTotal = precioTotal - platoEliminar[0].precio;
        precioTotalC.textContent = `S/${precioTotal.isInteger? precio : precioTotal.toFixed(2) }`;
        articulosPlato = articulosPlato.filter(plato=> plato.id !== platoId)


        if(!articulosPlato.length){
            llenarHtml();
            contenidoDefecto();
            vaciarCarrito(e)
            return;
        }
            llenarHtml();
    }
}

function procesarPlato(e){
    e.preventDefault();
    if(e.target.classList.contains('menu__agregar')){
        const platoSeleccionado = e.target.parentElement.parentElement;
        leerDatos(platoSeleccionado)
    };
}

function leerDatos(plato){
    const infoPlato = {
        imagen : window.getComputedStyle(plato.querySelector('.menu__imagen')).backgroundImage.slice(55).slice(5,-2),
        titulo: plato.querySelector('.menu__name').textContent,
        precio: parseFloat(plato.querySelector('.menu__price').textContent.slice(2)),
        cantidad: 1,
        id: plato.querySelector('.menu__agregar').getAttribute('data-id')
    }

    const existe = articulosPlato.some(plato => plato.id === infoPlato.id)
    precioTotal = precioTotal + infoPlato.precio;

    if(existe){
        const platos = articulosPlato.map(plato => {
            if(plato.id === infoPlato.id){
                plato.cantidad++;
                plato.precio += infoPlato.precio;
                return plato;
            }
            else{
                return plato;
            }   
        })
        articulosPlato = [...platos]
    }
    else {
        articulosPlato = [...articulosPlato, infoPlato]
    }

    
    // console.log(articulosPlato);
    // console.log(precioTotal);
    precioTotalC.textContent = `S/${precioTotal.isInteger? precio : precioTotal.toFixed(2) }`;
    llenarHtml()
}

function llenarHtml(){
    limpiarHtml();
    articulosPlato.forEach(plato =>{
        const {imagen, titulo, precio, cantidad, id} = plato
        const entradaCarrito = document.createElement('DIV');
        entradaCarrito.classList.add('carro__producto');
        entradaCarrito.innerHTML = `
        <div class="carro__itemC">
            <div class="carro__imagen" style="background-image: url('${imagen.trim()}');">
                <a class="eliminar-plato" data-id="${id}" href="#"><i class="bi bi-x-circle-fill"></i></a>
            </div>
            <div class="carro__descripcion">
                <p>${titulo}</p>
                <p>S/${precio.isInteger? precio : precio.toFixed(2) }</p>
            </div>
        </div>
        <div class="carro__cantidadC">
            <!-- <i id="agregar-producto" class="bi bi-dash"></i> -->
            <p id="cantidad">${cantidad}</p>
            <!-- <i id="quitar-producto" class="bi bi-plus"></i> -->
        </div>
        <div class="carro__precioC">
            <p>S/${precio.isInteger? precio : precio.toFixed(2) }</p>
        </div>
        `
        listadoPlatos.appendChild(entradaCarrito);
    })
}

function limpiarHtml(){
    while(listadoPlatos.firstChild){
        listadoPlatos.removeChild(listadoPlatos.firstChild)
    }
}

function contenidoDefecto(){
    const entradaCarrito = document.createElement('DIV');
    if(!articulosPlato.length){
        entradaCarrito.innerHTML = `
            <h4 class="text-center">Su carrito esta vacio</h4>
        ` 
        listadoPlatos.appendChild(entradaCarrito);
    }
    
}