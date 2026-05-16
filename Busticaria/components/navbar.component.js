const navbar = document.getElementById("navbar");

// Detecta en qué carpeta estás
let basePath = "";

if (
    window.location.pathname.includes("/pages/auth/login/") ||
    window.location.pathname.includes("/pages/auth/signin/")
) {
    basePath = "../../../";
}
else if (
    window.location.pathname.includes("/pages/categories/") ||
    window.location.pathname.includes("/pages/carrito/")
) {
    basePath = "../../";
}
else {
    // pages/home.html
    basePath = "../";
}

navbar.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">

        <a class="navbar-brand" href="${basePath}pages/home.html">
            <img src="${basePath}assets/img/logo.webp" alt="Busticaria" height="80">
        </a>

        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav">

            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav ms-auto">

                <li class="nav-item">
                    <a class="nav-link" href="${basePath}pages/home.html">
                        Home
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${basePath}pages/categories/categoria-tecnologia.html">
                        Tecnología
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${basePath}pages/categories/categoria-ropa.html">
                        Ropa
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${basePath}pages/categories/categoria-hogar.html">
                        Hogar
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${basePath}pages/carrito/carrito.html">
                        Carrito
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="${basePath}pages/auth/login/login.html">
                        Login
                    </a>
                </li>

            </ul>

        </div>

    </div>
</nav>
`;