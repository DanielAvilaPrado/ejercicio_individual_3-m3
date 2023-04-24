const body = document.querySelector('body');
body.style.backgroundImage = "url('https://images.unsplash.com/photo-1521985179118-6008b8cef2c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
body.style.backgroundSize = "cover";

let btn5 = document.querySelector("#btn5");
let resultado5 = document.querySelector("#ejercicio5")

function ordenAsc(e) {
    e.preventDefault()
    let arreglo = [];
    for (let i = 0; i < 5; i++) {
        arreglo.push(Math.floor(Math.random() * 100));
    }

    let ingresado1 = parseInt(document.getElementById("form5.1").value);
    let ingresado2 = parseInt(document.getElementById("form5.2").value);
    let ingresado3 = parseInt(document.getElementById("form5.3").value);
    let ingresado4 = parseInt(document.getElementById("form5.4").value);
    let ingresado5 = parseInt(document.getElementById("form5.5").value);

    arreglo.push(ingresado1, ingresado2, ingresado3, ingresado4, ingresado5); 

    arreglo.sort(function (a, b) {
        return a - b; // si los quiero ordenar de forma descendete se pone b - a
    });
    resultado5.innerHTML = arreglo;
}
btn5.addEventListener("click", ordenAsc);

