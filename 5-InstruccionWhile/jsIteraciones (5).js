function mostrar()
{

    var sexo;
        sexo = prompt("ingrese f ó m .");
            
        //while ( sexo != "m" && sexo != "f"){
          while (!(sexo == "m" || sexo == "f")){
            sexo = prompt("Dato invalido. Reingrese f o m");
            }
            
         //alert("Dato valido"); o tambien   
         document.getElementById('Sexo').value = sexo;
            
        

    

}//FIN DE LA FUNCIÓN