const body = document.querySelector('body');
body.style.backgroundImage = "url('https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
body.style.backgroundSize = "cover";


let aleatorio2 = document.querySelector("#aleatorio2")
let ejercicio2 = document.querySelector("#ejercicio2")
let btnGenerar2 = document.querySelector("#btn2")

function mayorNumContenido(e) {
    e.preventDefault();
    let arreglo = [];
    for (let i = 0; i < 10; i++) {
        arreglo.push(Math.floor(Math.random() * 100));
    }
    aleatorio2.innerHTML = arreglo;

    let numMayor = Math.max(...arreglo);
    ejercicio2.innerHTML =numMayor;
};
btnGenerar2.addEventListener("click", mayorNumContenido)