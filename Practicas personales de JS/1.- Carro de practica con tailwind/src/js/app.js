const d = document;
const vaciarCarritoBtn = d.querySelector('#vaciar-carrito');
const listaPostres = d.querySelector('#lista-postres');
const cuerpoCarro = d.querySelector('#carrito tbody');
const pieTotal = d.querySelector('#precio-total');
const carrito = d.querySelector('#carrito');

pieTotal.textContent = 0;
let arregloPostres = [];
let precioTotal = 0;

escucharListeners();

function escucharListeners() {
    listaPostres.addEventListener('click', agregarPostre);

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarro);

    // Eliminar cosas del carro
    carrito.addEventListener('click', eliminarPostre);
}

function eliminarPostre(e) {
    if(e.target.classList.contains('borrar-curso')){

        const idPostre = e.target.getAttribute('data-id')
        
        const  postreABorrar = arregloPostres.find(postre => postre.id === idPostre)
        // console.log(postreABorrar);

        if(postreABorrar){
            if (postreABorrar) {
                if (postreABorrar.cantidad > 1) {
                    // Si hay más de un producto con la misma identificación, disminuye la cantidad en uno
                    arregloPostres = arregloPostres.map(postre => {
                        if (postre.id === idPostre) {
                            postre.cantidad--;
                            postre.subtotal = postre.cantidad * postre.precio;
                        }
                        return postre;
                    });
                } else {
                    // Si la cantidad es 1, elimina el producto del arreglo
                    arregloPostres = arregloPostres.filter(postre => postre.id !== idPostre);
                }
            }
            

        }
        
        agregarHtml();
    }
}

function vaciarCarro(){
    arregloPostres = []
    precioTotal = 0
    pieTotal.textContent = 0;
    limpiarHtml();
}

function agregarPostre(e){
    // console.log(e.target);
    if (e.target.classList.contains('agregar-producto')){
        const postreSeleccionado = e.target.parentElement.parentElement;
        leerProducto(postreSeleccionado);
        // console.log(postreSeleccionado);
    }
}

function leerProducto(postre) {
    const infoPostre = {
        imagen : postre.querySelector('img').src,
        nombre : postre.querySelector('div h3').textContent,
        precio : parseFloat((postre.querySelector('div .precio').textContent).slice(2,-1)),
        cantidad : 1,
        id: postre.querySelector('div a').getAttribute('data-id'),
        subtotal : parseFloat((postre.querySelector('div .precio').textContent).slice(2,-1)),
    }


    const existe = arregloPostres.some((postre) => postre.id === infoPostre.id )
    // console.log(existe); 

    if(existe){
        arregloPostres.map(postre => {
            if(postre.id == infoPostre.id){
                postre.cantidad++;
                postre.subtotal = postre.subtotal + infoPostre.precio;
                return postre;
            }
            else{
                return postre;
            }
        })
    }
    else {
        arregloPostres = [...arregloPostres, infoPostre]
    }

    // console.log(arregloPostres);
    agregarHtml();
}

function agregarHtml(){
    limpiarHtml();
    precioTotal = arregloPostres.reduce((total, postre) => total+postre.subtotal, 0)
    // console.log(precioTotal);
    arregloPostres.forEach((postre) => {
        const {imagen, nombre, precio, cantidad, id, subtotal} = postre
        const carro = d.createElement('tr')
        carro.innerHTML = `
            <td>
                <img src=${imagen} width=100>
            </td>
            <td class="text-center" >${nombre}</td>
            <td class="text-center" >S/${Number.isInteger(precio)? `${precio}.00` : `${precio.toFixed(2)}`}</td>
            <td class="text-center"> ${cantidad} </td>
            <td class="text-center"> S/${Number.isInteger(subtotal)? `${subtotal}.00` : `${subtotal.toFixed(2)}`}</td>
            <td class="text-center"> 
                <a class="borrar-curso bg-red-600 text-white p-4 font-bold" data-id="${id}" href="#">X</a>
            </td>
        `
        cuerpoCarro.appendChild(carro)
    })

    pieTotal.textContent = `${Number.isInteger(precioTotal)? `${precioTotal}.00` : `${precioTotal.toFixed(2)}`}`;

} 

function limpiarHtml() {
    while(cuerpoCarro.firstChild){
        cuerpoCarro.removeChild(cuerpoCarro.firstChild)
    }


    // console.log(cuerpoCarro.firstChild);
}