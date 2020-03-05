function mostrar()
{
	var continente;
	var dias;
	var medioDePago;
	var precioFinal;
	



	continente = document.getElementById("Marca").value;
	dias = parseInt(prompt("Ingrese cantidad de dias")) * 100;
	medioDePago = prompt("Con que desea pagar?:");

	switch (continente){
		case "América":
			switch(medioDePago){
				case "debito":
					precioFinal= dias -(dias *60 /100);
					break;
				default:	
					precioFinal= dias -(dias *50 /100);
			}
			alert("El precio del viaje es de: $" + precioFinal);
			break;

		case "África":
			switch(medioDePago){
				case "mercadopago":
					precioFinal = dias - (dias * 75 /100);
					break;
				case "efectivo":
					precioFinal = dias - (dias * 75 /100);
					break;
				default: 
				precioFinal = dias - (dias * 60 /100);		
			}
			alert("El precio del viaje es de: $" + precioFinal);
			break;

		case "Europa":
			switch (medioDePago){
				case "debito":
					precioFinal= dias -(dias *35 /100);
					break;
				case "mercadopago":
					precioFinal = dias - (dias * 30 /100);
					break;
				default:
					precioFinal = dias - (dias * 25 /100);
			} 
			alert("El precio del viaje es de: $" + precioFinal);
			break;

			default:
			precioFinal = dias + (dias * 20 /100);
			alert("El precio del viaje es de: $" + precioFinal);
    }
}