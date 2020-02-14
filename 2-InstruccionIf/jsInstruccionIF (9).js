function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;
	var minimo = 1;
	var maximo = 10;

	numero = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	alert(numero);

}//FIN DE LA FUNCIÓN