let mainArray = []
let finalArray = []
let limSup = 300
let limInf = 1
let finalDigit = ""

const quantity = parseInt(prompt("¿De cuántos números quieres que sea el array aleatorio?"))

const finalDigitInput = () => {
    do {
        finalDigit = parseInt(prompt("¿En qué digito quieres que acaben los números a mostrar?"))
    } while (isNaN(finalDigit))
}

const fillArray = (quantity) => {
    for(let i = 0; i < quantity; i++) {
        mainArray.push(Math.floor(Math.random()*(limSup-limInf)+limInf))
    }
}

const searchArray = (finalDigit, array) => {
    for(let i = 0; i < quantity; i++) {
        if(array[i] % 10 === finalDigit){
            finalArray.push(array[i])
        }
    }
}

finalDigitInput()
fillArray(quantity)
searchArray(finalDigit, mainArray)

console.log(mainArray)
console.log(finalArray)

