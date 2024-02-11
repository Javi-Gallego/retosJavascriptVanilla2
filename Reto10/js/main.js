let primeArray = []

let liminf = parseInt(prompt("Escribe el límite inferior"))
let limsup = parseInt(prompt("Escribe el límite superior"))
let totalPrime = 0

for (let num = liminf; num <= limsup; num++) {
    let divisores = 0
    for(let j = 2; j <= num; j++) {
        if( num % j === 0 && j !== num) {
            divisores++
        }
    }
    if(divisores === 0) {
        totalPrime++
    }
}

let cantidad = parseInt(prompt("¿De cuántos números quieres que sea el array? siendo el máximo " + totalPrime + " números"))

const fillPrime = (cantidad, liminf, limsup) => {
    let insert = 0
    while (insert < cantidad) {
        const newRandom = Math.floor((Math.random()*(limsup-liminf)+liminf))
        let isPrime = true
        for(let i = 2; i <= newRandom; i++) {
            if(newRandom % i === 0 && i !== newRandom) {
                isPrime = false
            }
        }
        if (isPrime === true) {
            console.log(newRandom)
            primeArray.push(newRandom)
            insert++
        }
    }
}

const isBigger = (array) => {
    let bigger = 0
    for(let i = 0; i < array.length; i++){
        console.log("Array[" + i + "] = " + array[i])
        if(array[i] > bigger) {
            bigger = array[i]
        }
    }
    console.log("El número más grande es el " + bigger)
}

fillPrime(cantidad, liminf, limsup)
isBigger(primeArray)