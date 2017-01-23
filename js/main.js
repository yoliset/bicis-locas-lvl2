var span1 = document.createElement("span");
var span2 = document.createElement("span");
var span3 = document.createElement("span");
var span4 = document.createElement("span");
var span5 = document.createElement("span");
var span6 = document.createElement("span");
var div1 = document.createElement("div");


function nombreS(){
    var contenedor1 = document.getElementById("name");
    span1.innerHTML="La primera letra debe ser mayúscula";
    contenedor1.parentNode.appendChild(span1);
}
function apellidoS(){
    var contenedor2 = document.getElementById("lastname");
    span2.innerHTML="La primera letra debe ser mayúscula";
    contenedor2.parentNode.appendChild(span2);
}
function emailInvalido(){
    var contenedor3 = document.getElementById("input-email");
    span3.innerHTML="Email incorrecto";
    contenedor3.parentNode.appendChild(span3);
}
function passwordIncorrecto(){
    var contenedor4 = document.getElementById("input-password");
    span4.innerHTML="Contraseña debe tener numeros y letras";
    contenedor4.parentNode.appendChild(span4);
}
function passwordCaracter(){
    var contenedor5 = document.getElementById("input-password");
    span5.innerHTML="Coloque mínimo 6 carácteres";
    contenedor5.parentNode.appendChild(span5);
}
function seleccionar(){
    var contenedor6 = document.getElementsByClassName("form-control")[4];
    span6.innerHTML=" Seleccione alguna opción";
    contenedor6.parentNode.appendChild(span6);
}
function mensaje1(){
    var contenedor7 = document.getElementById("mensaje");
    div1.innerHTML="Llene todo porfavor";
    div1.classList.add("caja1");
    contenedor7.parentNode.appendChild(div1);
}
// .. mi función
function validateForm(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var email = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value;
    var seleccion = document.getElementsByClassName("form-control")[4].value;
    

// LA primera letra dbebe ser mayúscula
    var mayuNom=(/^[A-Z][a-z]+$/).test(nombre);
    if(mayuNom===false){
        nombreS();
    }else{
        span1.style.display="none";
    }
    var mayuApe=(/^[A-Z][a-z]+$/).test(apellido);
    if(mayuApe === false){
        apellidoS()
    }else{
        span2.style.display="none";
    }
// para el email  
    var electro=/^\S+@\S+\.\S+$/;
    if(!electro.test(email)){
        emailInvalido();
    }else{
        span3.style.display="none";
    }
 // el password debe tener numeros y letras
   if (password.length>=6 === false) {
         passwordCaracter();
	}
    else if (password =="123456" === false||password == "098754" === false) {
       passwordIncorrecto()+i;
		 span4.style.display="none";
	}
    else{
        span5.style.display="none";
    }
 // para que avise al usuario que debe seleccionar opciones      
    if(seleccion==0){
       seleccionar();
    }else{
       span6.style.display="none"; 
    }
 // avisa al usuario que debe llenar todo  
    if(nombre=="" || apellido=="" || email=="" || password=="" || seleccion==0){
        mensaje1();
    }

    else{
        div1.style.display="none";
        var nombre = document.getElementById("name").value="";
        var apellido = document.getElementById("lastname").value="";
        var email = document.getElementById("input-email").value="";
        var password = document.getElementById("input-password").value="";
        var seleccion = document.getElementsByClassName("form-control")[4].value=0;
        
    }
}