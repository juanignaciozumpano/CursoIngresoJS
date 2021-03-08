function mostar()
{
	var numero;  
	var contador=0;
	var acumulador=0;
	var respuesta;

	do {
		numero = parseInt(prompt("Ingrese numero"));
		while (isNaN(numero)){
			numero = parseInt(prompt("Error. ingrese un numero"));
		}
		
		acumulador = acumulador + numero;

		contador++;


		respuesta = prompt("Desea ingresar otro numero?");
		
	}while (respuesta == "si");
	

	promedio = acumulador / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN