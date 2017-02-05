//Creo un Span.y verifica si esta creado mi span 
function mostrarMensaje(input, _mensaje, mode=false){
    var span = input.parentNode.getElementsByTagName("span");
    if (mode) {
        if (span.length === 0) {
            span = document.createElement("span");
            input.parentNode.appendChild(span);
        }
        span.innerHTML = _mensaje;
        input.parentNode.getElementsByTagName("span")[0].style.display="block";
    }
    else if (span.length !== 0) {
        input.parentNode.getElementsByTagName("span")[0].style.display="none";
    }
}
function validateForm(){
    nombres();
    apellidos();
    correo();
    validatePassword();
    seleccionar();
    mensaje();
}
//Codigo para name lastname , email password
function validate_input(input) {
    console.log(input);
    var validations = {
        "name": /^[A-Z][a-z]+$/,
        "lastname": /^[A-Z][a-z]+$/,
        "email": /^\S+@\S+\.\S+$/,
    };
    if (validations[input.id].test(input.value) == false) {
        return false;
    }
    else
        return true;
}
function nombres() {
    var name = document.getElementById("name");
    if (validate_input(name) == false){
        mostrarMensaje(
            name, 
            "Incorrecto, La primera letra debe ser Mayúscula", 
            true
        );
    } else {
        mostrarMensaje(name);
    }
}
function apellidos(){
    var lastname = document.getElementById("lastname");
    if (validate_input(lastname) == false){
        mostrarMensaje(
            lastname, 
            "Incorrecto, La primera letra debe ser Mayúscula y sin números",
            true
        );
    } else{
        mostrarMensaje(lastname);
    }
}
function correo(){
    var email = document.getElementById("email");
   if (validate_input(email) == false){
        mostrarMensaje(
            email, 
            'email incorrecto',
            true
        );
   } else{
        mostrarMensaje(email);
   }
} 
function validatePassword(){
    var password = document.getElementById("password");
   if ((password.value).length>=6 === false || (/^[0-9]+$/.test(password.value) !== false)|| (/^[a-zA-Z]+$/.test(password.value) !== false) ){
       mostrarMensaje(
           password, 
           'El password debe tener 6 carácteres con letras y números', 
           true
       );
	} else{
        mostrarMensaje(password);
    }
}
function seleccionar(){
    var control = document.getElementById("control");
    if((control.value)==0 !==false ){
        mostrarMensaje(
            control, 
            'Selecciona una opción', 
            true
        );
    } else{
        mostrarMensaje(control);
    }
}
//Creo un div , el cual avisara que se tiene que llenar todo 
function manageMessage(_idInput, _mensaje, mode=false){
    var elemento = document.getElementById(_idInput);
    //verifica si esta creado mi div 
    if (mode) {
        if ( ! elemento) {
            elemento = document.createElement("div");
            elemento.id = _idInput;
            elemento.classList.add("caja1");
        }
        elemento.innerHTML = _mensaje;        
        elemento.style.display="block";
        
        var myForm = document.getElementById("myForm");
        myForm.appendChild(elemento);
    }
    else {
        var message = document.getElementById("mia");
        message.style.display="none";
    }
}
 function mensaje() {
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var control = document.getElementById("control");
    if((name.value)=="" !==false || (lastname.value)=="" !==false || (email.value)=="" !==false || (password.value)=="" !==false || (control.value)==0 !==false){
        manageMessage("mia", 'Es obligatorio, llenar los datos porfavor!!', true);
        
    } else {
        manageMessage();
    }
}
