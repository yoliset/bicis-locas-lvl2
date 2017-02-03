function mostrarMensaje(_idInput, _mensaje){
    var elemento = document.getElementById(_idInput);
    var span = elemento.parentNode.getElementsByTagName("span");
    if (span.length === 0) {
        console.log("se creo")
        span = document.createElement("span");
        elemento.parentNode.appendChild(span);
    }
    span.innerHTML = _mensaje;
}

function validateForm(){
    nombres();
    apellidos();
    correo();
    validatePassword();
    seleccionar();
    mensaje();
}
function nombres(){
   console.log("hola llegue");
    var name = document.getElementById("name");
    if (/^[A-Z][a-z]+$/.test(name.value) == false){
       mostrarMensaje("name", "Incorrecto, La primera letra debe ser Mayúscula");
        name.parentNode.getElementsByTagName("span")[0].style.display="block"; 
   } else{
       console.log(name.nextSibling);
       name.parentNode.getElementsByTagName("span")[0].style.display="none";
   }
}
function apellidos(){
    console.log("hola llegue");
    var lastname = document.getElementById("lastname");
   if (/^[A-Z][a-z]+$/.test(lastname.value) == false){
       mostrarMensaje("lastname", "Incorrecto, La primera letra debe ser Mayúscula y sin números");
       lastname.parentNode.getElementsByTagName("span")[0].style.display="block";
   } else{
       console.log(name.nextSibling);
        lastname.parentNode.getElementsByTagName("span")[0].style.display="none";
   }
}
function correo(){
    console.log("hola llegue");
    var email = document.getElementById("email");
   if (/^\S+@\S+\.\S+$/.test(email.value) == false){
       mostrarMensaje("email", 'email incorrecto');
       email.parentNode.getElementsByTagName("span")[0].style.display="block";
   } else{
       console.log(name.nextSibling);
        email.parentNode.getElementsByTagName("span")[0].style.display="none";
   }
} 
function validatePassword(){
    console.log("hola llegue");
    var password = document.getElementById("password");
   if ((password.value).length>=6 === false || (/^[0-9]+$/.test(password.value) !== false)|| (/^[a-zA-Z]+$/.test(password.value) !== false) ){
       mostrarMensaje("password", 'El password debe tener 6 carácteres con letras y números');
       password.parentNode.getElementsByTagName("span")[0].style.display="block";
	} else{
        password.parentNode.getElementsByTagName("span")[0].style.display="none";
    }
}
function seleccionar(){
    var control = document.getElementById("control");
    if((control.value)==0 !==false ){
        mostrarMensaje("control", 'Selecciona una opción');
        control.parentNode.getElementsByTagName("span")[0].style.display="block";
    } else{
        control.parentNode.getElementsByTagName("span")[0].style.display="none";
    }
}
 function mensaje(){
    var lastname = document.getElementById("name");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var control = document.getElementById("control");
    var mensajes= document.getElementById("mensajes");
    if((name.value)=="" !==false || (lastname.value)=="" !==false || (email.value)=="" !==false || (password.value)=="" !==false || (control.value)==0 !==false){
    mostrarMensaje("mensajes", 'Es obligatorio, llenar los datos porfavor!!');
        mensajes.parentNode.getElementsByTagName("span")[0].style.display="block";
        
    } else{
        mensajes.parentNode.getElementsByTagName("span")[0].style.display="none";
        
    }
}




