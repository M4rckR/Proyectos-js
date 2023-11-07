
d.addEventListener('DOMContentLoaded', ()=> {
    const campoNombre = d.querySelector('#nombre')
    const campoCorreo = d.querySelector('#correo')
    const campoDireccion = d.querySelector('#direccion')
    const enviarFormulario = d.querySelector('.formulario__enviar')
    const formulario = d.querySelector('.formulario')

    const campos = {
        datos: '',
        correo: '',
        direccion: ''
    }

    campoNombre.addEventListener('blur', validar)
    campoCorreo.addEventListener('blur', validar)
    campoDireccion.addEventListener('blur', validar)
    enviarFormulario.addEventListener('click', enviarDatos)

    function validar(e) {

        console.log(e.target.id);
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.name} es olbigatorio`,e.target.parentElement)
            campos[e.target.name] = ''
            comprobarCampo()
            return
        }
        
        if(e.target.id == 'correo' && !validarEmail(e.target.value)){
            mostrarAlerta(`El email es invalido`, e.target.parentElement)
            campos[e.target.name] = ''
            comprobarCampo()
            return 
        }

        limpiarAlerta(e.target.parentElement)

        campos[e.target.name] = e.target.value.trim().toLowerCase()

        comprobarCampo();
    }


    function enviarDatos(){
        
    }

    function mostrarAlerta(mensaje, referencia){

        limpiarAlerta(referencia)
        // console.log(campos);
        const alerta = d.createElement('P');
        alerta.classList.add('error')
        alerta.style.margin = 0
        alerta.textContent = mensaje
        referencia.appendChild(alerta)
    }


    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.error');
        if(alerta){
            alerta.remove();
        }
    }


    function comprobarCampo(){
        if(Object.values(campos).includes('')){
            // console.log('No apto');
            return
        }

        // console.log('Apto');
    }


    function validarEmail(email){
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
        const resultado = regex.test(email)
        return resultado;
    }
})