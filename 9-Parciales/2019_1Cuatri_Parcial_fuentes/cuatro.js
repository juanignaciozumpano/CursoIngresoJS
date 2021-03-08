function mostrar()
{

	var num1;
	var num2;
	var resta;

	num1 = prompt("ingrese numero1");
	num2 = prompt("ingrese numero2");

	if (num1 == num2){
		alert(num1 + num2);
	} 

	if else (num1 > num2){
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		resta= num1-num2;
		alert(resta);
			if (resta > 10){
				alert("la resta es" + resta + "y supero el 10");
			}
	}


	if else (num1 < num2){
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		alert(num1 + num2);
	}

}
