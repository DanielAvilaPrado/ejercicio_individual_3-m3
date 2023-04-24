const body = document.querySelector('body');
body.style.backgroundImage = "url('https://images.unsplash.com/photo-1579566346927-c68383817a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
body.style.backgroundSize = "cover";

let btn3 = document.querySelector("#btn3")
let resultado = document.querySelector("#ejercicio3")

const dias = [
    {
        1: "lunes",
        2: "Martes",
        3: "Miércoles",
        4: "Jueves",
        5: "viernes",
        6: "Sábado",
        7: "domingo"
    }
]

function obtenerDia (e) {
    e.preventDefault()
    let numero = document.querySelector("#form3").value
    let diaEscogido = dias[0][numero];
    resultado.innerHTML = diaEscogido;
};
btn3.addEventListener("click", obtenerDia)

