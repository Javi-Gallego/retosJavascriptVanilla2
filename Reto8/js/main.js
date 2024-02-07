let arrNum = []

const rellenar = (arrNum) => {
    for(let i = 0; i < 10; i++){
        arrNum[i] = parseFloat(prompt("Introduce valores para el array"))
    }
}

const mostrar =  (arrNum) => {
    for(let i = 0; i < arrNum.length; i++) {
        console.log("Array[" + i + "] tiene un valor de: " + arrNum[i])
    }
}

rellenar(arrNum)

mostrar(arrNum)