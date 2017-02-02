function mostrarMensaje(_idInput, _mensaje){
    var elemento = document.getElementById(_idInput);
    var span = document.createElement("span");
    span.innerHTML = _mensaje;
    elemento.parentNode.appendChild(span);
}
function validateForm(){
    nombres();
    apellidos();
    correo();
    contrasenia();
}
function nombres(){
   console.log("hola llegue");
    var name = document.getElementById("name");
    if (/^[A-Z][a-z]+$/.test(name.value) == false){
       mostrarMensaje("name", "La primera letra debe tener Mayúscula");
       
   } else{
       console.log(name.nextSibling);
        name.parentNode.getElementsByTagName("span")[0].style.display="none";
   }
}
function apellidos(){
    console.log("hola llegue");
    var lastname = document.getElementById("lastname");
   if (/^[A-Z][a-z]+$/.test(lastname.value) == false){
       mostrarMensaje("lastname", "La primera letra debe tener Mayúscula");
   } else{
       console.log(name.nextSibling);
        name.parentNode.getElementsByTagName("span")[0].style.display="none";
   }
}
function correo(){
    console.log("hola llegue");
    var email = document.getElementById("email");
   if (/^\S+@\S+\.\S+$/.test(email.value) === false){
       mostrarMensaje("email", 'email incorrecto');
   } else{
       console.log(name.nextSibling);
        name.parentNode.getElementsByTagName("span")[0].style.display="none";
   }
}
function contrasenia(){
    console.log("hola llegue");
    var password = document.getElementById("password").value;
   if (password.length>=6 === false){
       mostrarMensaje("password", 'El password debe tener 6 carácteres');
   }else if (password == "123456" ||password == "098754" === false) {
		mostrarMensaje("password", 'El password debe tener letras y números');
	    console.log(name.nextSibling);
        name.parentNode.getElementsByTagName("span")[0].style.display="none";
	}
    else{
        console.log(name.nextSibling);
        name.parentNode.getElementsByTagName("span")[0].style.display="none";
    }
}