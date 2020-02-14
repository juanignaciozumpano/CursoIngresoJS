function mostrar()
{
//tomo la edad  

var mes;

mes = document.getElementById("mes").value;
    switch(mes) {
        case "Febrero":{ 
             alert("Este mes no tiene mas de 29 dias");
         break;
        }
        default: {
             alert("Este mes tiene 30 o mas dias");
    }
	
}


}//FIN DE LA FUNCIÓN