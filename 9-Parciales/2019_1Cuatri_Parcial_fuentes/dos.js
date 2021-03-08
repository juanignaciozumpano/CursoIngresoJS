function mostrar()
{
 	var hombre;
 	var mujer;
 	var pesoHombre;
 	var pesoMujer;
 	var promedio;
 	var suma;


 	hombre = prompt("ingrese nombre hombre");
 	mujer = prompt ("ingrese nombre mujer");
 	pesoHombre = parseInt(prompt("ingrese peso"));
 	pesoMujer = parseInt(prompt("ingrese peso"));
 	suma = pesoHombre + pesoMujer;
 	promedio = suma / 2;


 	alert("Sus nombres son" + hombre + "y" + mujer + ". Y pesan" + pesoHombre + "y" + pesoMujer + "kilos que sumados son" + suma + "y su promedio es:" + promedio
 		)
}
