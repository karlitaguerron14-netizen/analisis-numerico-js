function calcular() {
    // Obtener los valores ingresados
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let c = parseFloat(document.getElementById("num3").value);

    let resultado = document.getElementById("resultado");

    // Verificar que los campos no estén vacíos
    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "" ||
        document.getElementById("num3").value === ""
    ) {
        resultado.innerHTML = "<h3>Mostrar respuestas</h3>Ingrese los tres valores.";
        return;
    }

    // Verificar que sea una ecuación cuadrática
    if (a === 0) {
        resultado.innerHTML = "<h3>Mostrar respuestas</h3>El valor de a debe ser diferente de cero.";
        return;
    }

    // Calcular el discriminante
    let discriminante = b * b - 4 * a * c;

    // Calcular las soluciones
    if (discriminante > 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        resultado.innerHTML = 
            "<h3>Mostrar respuestas</h3>" +
            "Primera solución: x1 = " + x1 + 
            "<br>Segunda solución: x2 = " + x2;

    // Comprobar si hay solamente una solución
    } else if (discriminante === 0) {
        let x = -b / (2 * a);

        // Mensaje
        resultado.innerHTML = 
            "<h3>Mostrar respuestas</h3>" +
            "Una solución: x = " + x;

    } else {
        // En tal caso que el discriminante sea negativo
        resultado.innerHTML = 
            "<h3>Mostrar respuestas</h3>" +
            "No existen soluciones reales.";
    }
}