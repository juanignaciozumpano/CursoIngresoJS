/*function mostrar()
{
	var numero;
	var respuesta;
	var acum_negativo = 0;
	var acum_positivo = 0;
	var contadorPositivo = 0;
	var contadorNegativo = 0;
	var contadorDeCeros = 0;
	var promedio_pos;
	var promedio_neg;
	var cant_par = 0;
	var diferenciaPosNeg;

	do{
		numero=parseInt(prompt("ingrese un numero: "));
		while(isNaN(numero)){
			numero=parseInt(prompt("debe ingresar un numero, reintente: "));
		}

		if(numero==0){
			contadorDeCeros++;
		}else if(numero<0){
			contadorNegativo++;
			acum_negativo=acum_negativo + numero;
		}else{
			contadorPositivo++;
			acum_positivo=acum_positivo + numero;

			if (numero % 2 == 0){
				cant_par++;
			}
		}

			respuesta=prompt("Presione Enter para continuar, de lo contrario escriba no");
	}while(respuesta!="no")

	promedio_pos = acum_positivo /  contadorPositivo;
	promedio_neg = acum_negativo / contadorNegativo;

	diferenciaPosNeg = acum_positivo - acum_negativo;





	console.log("Cantidad de pos: " + contadorPositivo);
	console.log("Cantidad de neg: " + contadorNegativo);
	console.log("Suma pos: " + acum_positivo);
	console.log("Suma neg: " + acum_negativo);
	console.log("Cantidad de ceros: " + contadorDeCeros);
	console.log("Cantidad de pares: " + cant_par);
	console.log("promedio de positivos " + promedio_pos);
	console.log("promedio de neg " + promedio_neg);
	console.log("diferenciaPosNeg " + diferenciaPosNeg);
	
*/	




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var tipo;
var precio;
var cantidadUnidades;
var marca;
var fabricante;
var i;
var flag = 0
var precioMax;
var precioMin;
var flag2 = 0
var cantidadUnidadesMax;
var cantidadUnidadesMin;
var fabricanteBarbijoCaro;
var cantidadUnidadesBarbijoCaro;
var fabricanteMaxUnidades;
var acumuladorDeJabones = 0;



	for (i = 0; i < 5; i++){
		do{
			tipo = prompt("ingrese tipo de producto:")
		}while (!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol"))

		do{
			precio = parseInt(prompt("ingrese precio"));
		}while (!(precio >=100 && precio <= 300 || isNaN(precio)))

		do{
			cantidadUnidades = parseInt(prompt("ingrese cantidad de unidades:"));
		}while(cantidadUnidades <= 0 || cantidadUnidades >1000 || isNaN(cantidadUnidades))

		marca = prompt("ingrese marca:");
		fabricante = prompt("ingrese fabricante:");



		//punto A

		if (tipo == "barbijo" && (flag == 0 || precio > precioMax)){
			precioMax = precio;
			fabricanteBarbijoCaro = fabricante;
			cantidadUnidadesBarbijoCaro = cantidadUnidades;
		}
		if (flag == 0 || precio < precioMin){
			precioMin =  precio;
			flag = 1
		}

		//punto B


		if (flag2 == 0 || cantidadUnidades > cantidadUnidadesMax){
				cantidadUnidadesMax = cantidadUnidades;
				fabricanteMaxUnidades = fabricante;
			}
		if (flag2 == 0 || cantidadUnidades < cantidadUnidadesMin){
				cantidadUnidadesMin = cantidadUnidades;
				flag2 = 1
			}

		// punto C

		if (tipo == "jabon"){
			acumuladorDeJabones  = acumuladorDeJabones + cantidadUnidades;
		}


	}

	
	console.log("Del barbijo mas caro la cantidad de unidades son: " + cantidadUnidadesBarbijoCaro + " y el fabricante es: " + fabricanteBarbijoCaro);
	console.log ("Del item con mas unidades el fabricante es: " + fabricanteMaxUnidades);
	console.log ("En total hay " + acumuladorDeJabones + "  cantidad de jabones");








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var edadMin;
	var edadMax;
	var flag = 0
	var nombreDelCasadoMasJoven;
	var respuesta;
	var flag2 = 0
	var sexoMasViejo;
	var nombreMasViejo;
	var cantidadMujeresCasadasOViudas = 0;
	var promedio;
	var contadorDeMujeres = 0;
	var acumuladorDeEdadMujeres = 0;
	var acumuladorEdadHombreSoltero = 0;
	var contadorDeHombreSoltero = 0;
	var promedio_hombres_solteros;
	

	do{

	nombre = prompt("ingrese nombre: ");

	do{
		edad = parseInt(prompt("ingrese edad mayor a 18 años: "));
	}while (!(edad >= 18))

	do{
		sexo = prompt("ingrese f o m : ");
	}while (!(sexo == "m" || sexo == "f"))

	do{
		estadoCivil = (prompt("ingrese estado civil: "));
	}while (!(estadoCivil == "casado" || estadoCivil == "viudo" || estadoCivil == "soltero"))
	
		

//punto A

	if (estadoCivil == "casado" && sexo == "m" && (flag == 0 || edad < edadMin)){
		edadMin = edad;
		nombreDelCasadoMasJoven = nombre;
	}	
	if (estadoCivil == "casado" &&  sexo == "m" && (flag == 0 || edad > edadMax)){
		edadMax = edad;
		flag = 1
	}



//punto B

	if (flag2 == 0 || edad > edadMax){
		edadMax = edad;
		nombreMasViejo = nombre;
		sexoMasViejo = sexo;
	}
	if (flag2 == 0 || edad < edadMin){
		edadMin = edad;
		flag2 = 1
	}

//punto C
	 
	 if ((estadoCivil == "casado" || estadoCivil == "viudo") && sexo == "f"){

	 	cantidadMujeresCasadasOViudas++;
		
	 }
	
//punto D

	if (sexo == "f"){

		acumuladorDeEdadMujeres = acumuladorDeEdadMujeres + edad;
		contadorDeMujeres++;
	}
//punto E

	if (sexo == "m" && estadoCivil == "soltero"){

		acumuladorEdadHombreSoltero = acumuladorEdadHombreSoltero + edad;
		contadorDeHombreSoltero++
	}



	respuesta = prompt("desea ingresar otro nombre??")

}while (respuesta == "si")

promedio = acumuladorDeEdadMujeres / contadorDeMujeres;
promedio_hombres_solteros = acumuladorEdadHombreSoltero / contadorDeHombreSoltero;

console.log ("el nombre del casado mas joven es: " + nombreDelCasadoMasJoven);
console.log ("el sexo y el nombre del pasajero mas viejo es: " + nombreMasViejo + " " + sexoMasViejo);
console.log ("la cantidad de mujeres q hay casadas  o viudas son: " + cantidadMujeresCasadasOViudas); 
console.log ("el promedio de edad entre las mujeres es " + promedio);
console.log ("el promedio de edad entre los hombres solteros es de: " + promedio_hombres_solteros);







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function mostrar()
{

var respuesta;
var peso;
var precioXkilo;
var tipo;
var totalAPagar;
var totalAPagarBruto = 0;
var kilosTotales=0;
var precioMax;
var alimentoMasCaro;
var flag = 0;
var promedio;

do{

	do{
		peso = parseInt(prompt("ingrese peso del ingrediente:"));
	}while (!(peso >= 10 && peso <= 1000))

	do{
		precioXkilo = parseInt(prompt("ingrese precio por kilo:"));
	}while (!(precioXkilo > 0))

	do{
		tipo = prompt("ingrese tipo de ingrediente:");
	}while(!(tipo == "v" || tipo == "a" || tipo == "m"))


	totalAPagarBruto = totalAPagarBruto + peso * precioXkilo;
	kilosTotales = kilosTotales + peso;

	if(flag == 0 || precioXkilo > precioMax){
		precioMax = precioXkilo;
		alimentoMasCaro = tipo;
	}
	flag = 1;



respuesta = prompt("desea ingresar otro ingrediente?");
}while (respuesta == "si")


totalAPagar=totalAPagarBruto;

if(kilosTotales > 300){
		totalAPagar= totalAPagar -(totalAPagar * 25 / 100);
	}

	else if (kilosTotales >100) {
		totalAPagar= totalAPagar -(totalAPagar * 15 / 100);
	
	}

promedio = totalAPagarBruto / kilosTotales;

console.log("el total a pagar sin descuento es de: " + totalAPagarBruto);
console.log("el total a pagar con descuento es: " + totalAPagar);
console.log ("tipo del alimento mas caro es: " + alimentoMasCaro);
console.log ("el promedio total es: " + promedio);
}//FIN DE LA FUNCIÓN





