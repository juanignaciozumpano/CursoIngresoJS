function mostrar()
{
//tomo la edad  

var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if(edad >=18){
        alert("Es mayor de edad");
    }
    else if (edad >=13 && edad <=17){ //o edad <= 17 tambien sirve
        alert("Es adolescente");
    }
    else{
        alert("niño menor de 13 años");
    }


}//FIN DE LA FUNCIÓN