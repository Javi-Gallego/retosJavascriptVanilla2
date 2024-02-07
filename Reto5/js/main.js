let numDecimal = parseInt(prompt("¿Qué número quieres convertir a binario?"))

const conversor = (num) => {
    
    let numBinario = ""
    let Decimal = numDecimal
   
    while(Decimal > 0){ 
        numBinario = (Decimal % 2) + numBinario
        if (Decimal % 2 === 0) {
            Decimal = Decimal / 2
        } else {
            Decimal = (Decimal - 1) /2
        }
    }          

    console.log("El número " + numDecimal + " en binario es " + numBinario)
}

conversor(numDecimal)