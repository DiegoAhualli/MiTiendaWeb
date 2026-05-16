const usuarioLogueado = localStorage.getItem("usuarioLogueado");

if(usuarioLogueado !== "true"){
    window.location.href="./auth/login/login.html";
}