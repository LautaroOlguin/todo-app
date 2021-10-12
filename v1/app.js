const botonAgregar = document.getElementById("but")
const nuevaTarea = document.getElementById("task")
const listaTareas = document.getElementById("lista") 
const check = document.getElementById("tarea")

botonAgregar.addEventListener("click", function(e){
    e.preventDefault();
    var texto = nuevaTarea.value;
    var nuevoli =  document.createElement("li");
    nuevoli.innerHTML = 
    `
    <input type="checkbox" id="tarea">${texto}<button onclick="eliminar(this)" class="bo"><img src="18297.png" alt=""></img></button>
    `
    listaTareas.prepend(nuevoli);
});

function eliminar(botonEliminar){
    botonEliminar.parentElement.remove();
}
check.addEventListener("click", function(){
    if(check.checked){
       check.style.textDecoration="line-through";
    }
    else{
        check.style.textDecoration="none";
    }
})