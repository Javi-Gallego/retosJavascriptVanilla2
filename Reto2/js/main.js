const cantidad = parseInt(prompt("¿Cuántos números aleatorios quieres generar?"))
const infNum = parseInt(prompt("¿Entre qué números quieres que se generen? Pon el más bajo"))
const supNum = parseInt(prompt("¿Entre qué números quieres que se generen? Pon el más alto"))

const generaRandom = (liminf, limsup, cant) => {
    for(let i = 1; i <= cant; i++){
        console.log((Math.random()*(limsup-liminf)+liminf).toFixed(2))
    }
}

generaRandom(infNum, supNum, cantidad)