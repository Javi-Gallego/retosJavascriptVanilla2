const figura = prompt("¿De qué figura quieres calcular el área? (circulo, cuadrado o triangulo)")

if (figura === "triangulo") {
    const base = parseFloat(prompt("¿Cual es la base del triangulo"))
    const altura = parseFloat(prompt("Ahora escribe la altura"))

    const area = (base*altura/2).toFixed(2)

    console.log("El área del triángulo es: " + area)
}

if(figura === "cuadrado") {
    const lado = parseFloat(prompt("¿Cuánto mide el lado del cuadrado"))

    const area = (lado*lado).toFixed(2)

    console.log("El área del cuadrado es: " + area)
}

if(figura === "circulo") {
    const PI = 3.1415
    const radio = parseFloat(prompt("¿Cuál es el radio del círculo?"))

    const area = (PI*radio**2).toFixed(2)

    console.log("El área del círculo es: " + area)
}