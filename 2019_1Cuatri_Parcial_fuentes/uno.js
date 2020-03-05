
function mostrar()
{

	var lado;
	var perimetro;
		
			lado = parlado = parseInt(prompt("ingrese lado:"));
				while (isNaN(lado)){
					lado = parseInt(prompt("error. ingreselado:"));
				}	 
				
			perimetro = lado * 3;

			alert("el perimetro es:" + perimetro);
			
		
}
