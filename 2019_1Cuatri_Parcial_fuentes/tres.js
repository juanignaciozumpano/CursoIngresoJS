function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;


	precio = parseInt(prompt("ingrese precio:"));
	descuento = parseInt(prompt("ingrese descuento"));
	
	precioFinal = precio - (precio * descuento /100);
	document.getElementById("elPrecioFinal").value = precioFinal;




}

