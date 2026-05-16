const contenedorDestacado = document.getElementById("contenedorDestacado");

contenedorDestacado.innerHTML = `
    <article class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
            <img src="../assets/img/ps5.webp" class="card-img-top" alt="Playstation 5">

            <div class="card-body d-flex flex-column">
                <h3 class="card-title h5">Playstation 5</h3>

                <p class="card-text">
                    Consola de videojuegos de última generación con gráficos impresionantes y rendimiento excepcional. Bundle Gran Turismo 7.
                </p>

                <p class="fw-bold">$500000</p>

                <a href="./categories/categoria-tecnologia.html#ps5-destacado" class="btn btn-busticaria mt-auto">
                    Ver producto destacado
                </a>
            </div>
        </div>
    </article>
`;