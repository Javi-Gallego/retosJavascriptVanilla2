const libras = 0.86
const dolares = 1.128611
const yenes = 129852

const dinero = prompt("¿Cuántos € quieres convertir?")
const divisa = prompt("¿A qué moneda quieres convertir los €? (libra, dolar, yen")

const conversor = (dinero, divisa) => {

    if(divisa === "libra"){
        console.log(dinero + "€ equivalen a " + dinero*libras + " libras")
    }
    if(divisa === "dolar"){
        console.log(dinero + "€ equivalen a " + dinero*dolares + " dolares")
    }
    if(divisa === "yen"){
        console.log(dinero + "€ equivalen a " + dinero*yenes + " yenes")
    }

}

conversor(dinero, divisa)