const contenedorCarrito = document.getElementById("contenedorCarrito");

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (carrito.length === 0) {

    contenedorCarrito.innerHTML = `
        <div class="col-12">
            <p class="alert alert-warning">
                No hay productos en el carrito.
            </p>
        </div>
    `;

} else {

    carrito.forEach(function(producto) {

        contenedorCarrito.innerHTML += `
            <article class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h3 class="card-title h5">${producto.titulo}</h3>

                        <p class="fw-bold">${producto.precio}</p>

                        <p>Cantidad: ${producto.cantidad}</p>
                    </div>
                </div>
            </article>
        `;

    });

}