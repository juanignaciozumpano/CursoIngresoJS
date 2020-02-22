function mostrar()
{
	var numero;
	var flag=0;
	var positivo=0;
	var negativo=1;
	var respuesta;

	do{
		numero = parseInt(prompt("ingrese un numero"));
		while ( isNaN(numero)){
			numero = parseInt(prompt("Error ingrese un numero"));
		}
		
		if ( numero >= 0 ){
			positivo = positivo + numero;
		}
		else{
			negativo = negativo * numero;
			flag = 1;
		}
		respuesta = prompt("Desea ingresar otro numero?");
	}while (respuesta == "si")


	if ( flag == 0){
		negativo = 0
	}
	
	
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//flag se ultiliza como si fuera un contador para saber si entro al menos 1 vez, si no se necesita contar los negativos va flag, en el caso que se necesite contar los negativos se utiliza contador.