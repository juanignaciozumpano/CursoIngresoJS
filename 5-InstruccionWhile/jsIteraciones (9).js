function mostrar()
{

	var flag=0;
	var numero;
	var numMax;
	var numMin;
	var respuesta;

	do{
		numero = parseInt(prompt("ingrese un numero"));
		while ( isNaN(numero)){
			numero = parseInt(prompt("Error ingrese un numero"));
		}
		
		if ( flag == 0 || numero > numMax){
			numMax = numero;
			}
		if (flag == 0 || numero < numMin){
			numMin = numero;
			flag = 1;
		}


		respuesta = prompt("Desea ingresar otro numero?");
	}while (respuesta == "si")


	document.getElementById('maximo').value=numMax;
	document.getElementById('minimo').value=numMin;

}//FIN DE LA FUNCIÓN