const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="/Busticaria/pages/index.html">
      <img src="/Busticaria/assets/img/logo.webp" alt="Busticaria" height="80">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="/Busticaria/pages/index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="/Busticaria/pages/categories/categoria-tecnologia.html">Tecnología</a></li>
        <li class="nav-item"><a class="nav-link" href="/Busticaria/pages/categories/categoria-ropa.html">Ropa</a></li>
        <li class="nav-item"><a class="nav-link" href="/Busticaria/pages/categories/categoria-hogar.html">Hogar</a></li>
        <li class="nav-item"><a class="nav-link" href="/Busticaria/pages/auth/login.html">Login</a></li>
        <li class="nav-item"><a class="nav-link" href="/Busticaria/pages/auth/registro.html">Registro</a></li>
      </ul>

      <button class="btn btn-danger ms-lg-2" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
          <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
          <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/>
        </svg> Logout
      </button>
    </div>
  </div>
</nav>
`;