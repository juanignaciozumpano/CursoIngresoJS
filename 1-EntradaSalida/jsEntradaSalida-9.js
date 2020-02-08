/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var resultado;

    importe = document.getElementById("sueldo").value;
    importe = parseInt(importe);

    resultado = (importe + importe * 10 / 100)

    document.getElementById("resultado").value = resultado;
    
    

   /* var sueldo;
    var aumento;
    var sueldoConAumento;

    sueldo = parseFloat(sueldo);
    sueldo = document.getElementById("sueldo").value;
    aumento = sueldo * 10 / 100;
    sueldoConAumento = sueldo + aumento;

    document.getElementById("resultado").value = sueldoConAumento;
*/
}


