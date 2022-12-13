const parrafoInicial = document.getElementById("parrafoinicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function() {
    cambioColorAleatorio();    
}

function cambioColorAleatorio(){
    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ]
   
    parrafoInicial.style.color = colores [Math.floor(Math.random() * colores.length)];
}