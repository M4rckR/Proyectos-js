
document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.querySelector('.formulario');
    const btnTweet = document.querySelector('#btnAgregar');
    let listaTweets = document.querySelector('.listaTweets');
    let citas = [];

    addEventListeners();
    function addEventListeners(){
        btnTweet.addEventListener('click', agregarTweet)
        listaTweets.addEventListener('click', (e)=>{
            (e.target.id === 'borrar-cita')? borrarCita(e.target.getAttribute('data-id')) : null;
        })
    }


    function agregarTweet(e){
        let cita = document.querySelector('#cita').value;
        if(cita.length > 0){
            llenarObjeto();
        }
    }


    function borrarCita(id){
        citas = citas.filter(cita => cita.id !== id);
        llenarCita(citas)
    }


    function llenarObjeto(){
        const cita = {
            cita : btnTweet.parentElement.querySelector('input').value,
            id: Date.now(),
        }
        citas = [...citas, cita];
        llenarCita(citas)
    }

    function llenarCita(citas){
        limpiarTweets();
        listaTweets.innerHTML = '<h3>Lista de tweets</h3>';
        if(citas.length > 0){
            citas.forEach(cita=> {

                let html = document.createElement('div');
                html.classList.add('d-flex', 'justify-content-between', 'align-items-center','alert', 'alert-secondary');

                const parrafoTexto = document.createElement('p');
                parrafoTexto.textContent = cita.cita;
                parrafoTexto.classList.add('m-0', 'fs-5')

                const botonEliminar = document.createElement('p');
                botonEliminar.classList.add('m-0','fs-5','btn', 'btn-danger');
                botonEliminar.textContent = 'X';
                botonEliminar.setAttribute('data-id', cita.id);


                botonEliminar.onclick = () => {
                    borrarCita(cita.id);
                }


                html.appendChild(parrafoTexto);
                html.appendChild(botonEliminar);
                listaTweets.appendChild(html);
            })
        }
    }

    function limpiarTweets(){
        while(listaTweets.firstChild){
            listaTweets.removeChild(listaTweets.firstChild)
        }
    }

})



