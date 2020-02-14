function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;
	var minimo = 1;
	var maximo = 10;

	numero = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	if(numero == 9 || numero == 10){
		alert("Excelente " + "tu nota es: " + numero);
	}
	else if(numero >= 4){
		alert("APROBO " + "su nota es: " + numero);
	}
	else{
		alert("Vamos la proxima se puede. Su nota es: " + numero);
	}


}//FIN DE LA FUNCIÓN