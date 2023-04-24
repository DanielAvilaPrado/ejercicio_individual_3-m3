const body = document.querySelector('body');
body.style.backgroundImage = "url('https://images.unsplash.com/photo-1592513735373-ae19bac7fde8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
body.style.backgroundSize = "cover";

let btn4 = document.querySelector("#btn4");
let resultado4 = document.querySelector("#ejercicio4")

function buscarElemento(e) {
    e.preventDefault()
    let numIngresado = parseInt(document.querySelector("#form4").value);
    let arreglo = [];
    for (let i = 0; i < 100; i++) {
        arreglo.push(Math.floor(Math.random() * 50));
    }
    console.log(arreglo)
    let elementoBuscado = arreglo.includes(numIngresado);
    if (elementoBuscado == true) {
        resultado4.innerHTML = `¡Felicitaciones!, el número ${numIngresado} existe en el arreglo`;
    } else {
        resultado4.innerHTML = `¡Oh!, mala suerte, el número ${numIngresado} no existe en el arreglo`;
    }
}
btn4.addEventListener("click", buscarElemento)
