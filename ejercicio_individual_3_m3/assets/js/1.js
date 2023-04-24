const body = document.querySelector('body');
body.style.backgroundImage = "url('https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
body.style.backgroundSize = "cover";

let ejercicio1 = document.querySelector("#ejercicio1");
let numero = document.querySelector("#form1").value;
let btnGenerar = document.querySelector("#btn1")
console.log(btnGenerar)

function crearArreglo(e) {
    e.preventDefault()
    let arreglo = [1];
    let numero = document.querySelector("#form1").value;
    for (let i = 1; i < numero; i++) {
        let ultimo = arreglo[arreglo.length - 1];
        arreglo.push(ultimo * 2);
    } ejercicio1.innerHTML = `El resultado es: ` + arreglo
};

btnGenerar.addEventListener("click", crearArreglo)



