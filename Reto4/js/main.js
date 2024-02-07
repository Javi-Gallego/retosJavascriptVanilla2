const numero = parseInt(prompt("¿De qué número quieres calcular el factorial?"))

const factorial = (num) => {
    let total = 1
    for(let i = 1; i <= num; i++) {
        total = total * i
    }

    console.log(num + "! es " + total)
    return total
}

factorial(numero)