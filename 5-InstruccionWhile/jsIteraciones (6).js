function mostrar()
{
	
	var numero;
	var contador=0;
	var acumulador=0;
	var promedio;

		while ( contador < 5){
		
			numero = parseInt(prompt("Ingrese numero"));
			while ( isNaN(numero)){
				numero = parseInt(prompt("Error. Ingrese un numero"));
			}
			acumulador = acumulador + numero;

			contador++;

			
		}
		promedio = acumulador / 5;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN