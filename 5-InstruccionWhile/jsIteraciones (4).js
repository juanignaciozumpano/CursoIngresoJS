function mostrar()
{

	var numero; 
		numero = parseInt(prompt("ingrese un número entre 0 y 9 inclusive."));
			
		//  while (numero < 0 || numero >9 || isNaN(numero)){ o tambien
			while (!(numero >= 0 && numero <= 9)) {
				numero = parseInt(prompt("Dato invalido, reingrese dato"));
			}
				//alert("Dato valido"); o tambien
				document.getElementById("Numero").value = numero;
			


}//FIN DE LA FUNCIÓN