const numero = parseInt(prompt("Introduce un número para saber si es primo (entero)"))

const esPrimo = (num) => {

    //Como no voy a dividir ni por 2 ni por si mismo, con que encuentre una sola coincidencia ya será no primo
    for(let i = 2; i <= num; i++) {
        if(num % i === 0 && i !== num) {
            return false
        }
    }
    return true
}



esPrimo(numero)