// Recuperar el valor del HTML

let formulario = document.getElementById("formulario");
let tituloModal = document.querySelector("#resultado-contenido h1"); // Selector Modal

formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    let pesoUsuario = document.getElementById("input_peso");
    let peso = pesoUsuario.value;
    valido(peso);
});

// Mostrar Ventana Modal

function mostrarResultado(){
    let ventana = document.getElementById("ventanaModal");
    ventana.style.display = "block";
}
function ocultarResultado(){
    let ventana = document.getElementById("ventanaModal");
    ventana.style.display = "none";
}
// Boton de cerrado
let botonCerrar = document.getElementById("cerrar-resultados");
botonCerrar.addEventListener("click",()=>{
    ocultarResultado();
});

/**
 * Valida la entrada del Dato 
 */
function valido(peso){
    if(peso > 0){
        //alert(calculadorPeso(peso));
        tituloModal.textContent = "El calculo es de  " + calculadorPeso(peso); 
        mostrarResultado();
    } else{
        tituloModal.textContent = "Ingrese un Dato valido"; 
        mostrarResultado();
    }
}

function calculadorPeso(peso){
    let volumen; 
    if(peso <= 9){
        volumen = peso*30; 
    } else if( peso >= 10 && peso <= 20 ){
        volumen = 1000 + (peso-10)*50;
    } else{
        volumen = 1500 + (peso -20)*20;
    }
    return volumen;
}
