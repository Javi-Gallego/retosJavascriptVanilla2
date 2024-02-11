let fray = []
const lengthArray = parseInt(prompt("¿De qué longitud quieres que sea el array de números?"))
let min = 0
let max = 9
let sumaTotal = 0

const fillArray = (min, max) => {
   for(let i = 0; i <= lengthArray; i++) {
      fray.push((Math.random()*(max-min)).toFixed(1))
   }
}

const showArray = () => {

   fray.map(
      elemento => {
         console.log(elemento)
         sumaTotal += parseFloat(elemento)
      }
   )
   console.log("La suma de todos los elementos es: " + sumaTotal)
}

fillArray(min, max)
showArray()
