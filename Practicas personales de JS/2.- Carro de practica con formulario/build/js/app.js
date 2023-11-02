const d = document;
const imagen = d.querySelector('.hero__images');
const title = d.querySelector('.hero__title');
let cantidad=0;

imagen.style.cursor = 'pointer'

imagen.addEventListener('click', ()=> {
    mandarSaludo()
})

function mandarSaludo(){
    cantidad++;
    console.log(cantidad);
    title.innerHTML = `${cantidad}`
}