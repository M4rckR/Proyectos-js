const d = document;
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); 
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners(){
    listaCursos.addEventListener('click', agregarCurso)

    // Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHtml();
    })
}

// Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado)
    }
}

function eliminarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')) {
        // e.preventDefault();
        const cursoId = e.target.getAttribute('data-id')
        // Elimina arreglos del carrito
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)
        console.log(articulosCarrito);
        carritoHtml();
    }
}

function leerDatosCurso(curso) {
    // console.log(curso);
    // Objeto de info curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si el elemento ya existe en el carro
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    // console.log(existe);
    
    if(existe){
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }
            else {
                return curso;
            }
        })
        articulosCarrito = [...cursos]
    }
    else{ 
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    // Agregar elementos al arreglo de carritos

    // console.log(articulosCarrito);
    carritoHtml();
}


// Muestra el carrito de compras
function carritoHtml() {

    limpiarHtml();
    articulosCarrito.forEach((curso) => {
        // console.log(curso);
        const {imagen, titulo,precio,cantidad, id } = curso
        const row = d.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id=${id}>X</a>
            </td>
        `

        contenedorCarrito.appendChild(row);
    })
}

function limpiarHtml() {
    // contenedorCarrito.innerHTML= ``;


    // Mucho mas rapido
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
