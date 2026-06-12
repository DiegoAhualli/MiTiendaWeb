const usuarioLogueado = sessionStorage.getItem("usuarioLogueado");

if(!usuarioLogueado){
    window.location.href="../auth/login/login.html";
}