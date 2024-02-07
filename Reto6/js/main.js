const numero = prompt("Introduce un número entero positivo para calcular el número de cifras que tiene")

if(!isNaN(parseInt(numero)) && numero >= 0) {
    console.log("El número tiene " + numero.length + " cifras")
}