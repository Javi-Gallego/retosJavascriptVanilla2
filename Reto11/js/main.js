let array1 = []
let array2 = []
let array3 = []

const longitud = parseInt(prompt("¿De que longitud serán los arrays?"))

const fillArray = (array) => {
    for(let i = 1; i <= longitud; i++){
        array.push(Math.floor(Math.random()*10))
    }
}

const multiplyArray = (array1, array2, array3) => {
    for(let i = 0; i < array1.length; i++) {
        array3[i] = array1[i] * array2[i]
    }
}

const showArray = (array1, array2, array3) => {
    console.log("Array 1     Array 2     Array 3")
    for(let i = 0; i < array1.length; i++) {
        console.log("[" + i + "] = " + array1[i] + "     [" + i + "] = " + array2[i] + "    [" + i + "] = " + array3[i])
    } 
}

fillArray(array1)
fillArray(array2)
multiplyArray(array1, array2, array3)
showArray(array1, array2, array3)