const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(evento) {
    evento.preventDefault();

    sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

    window.location.href = "../../home.html";
});