const contenedorCarrito = document.getElementById("contenedorCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito() {

    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {

        contenedorCarrito.innerHTML = `
            <div class="col-12">
                <p class="alert alert-warning">
                    No hay productos en el carrito.
                </p>
            </div>
        `;

        return;
    }

    carrito.forEach(function(producto, indice) {

        contenedorCarrito.innerHTML += `
            <article class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${producto.imagen}" class="card-img-top product-card__img" alt="${producto.titulo}">

                    <div class="card-body">
                        <h3 class="card-title h5">${producto.titulo}</h3>

                        <p class="fw-bold">${producto.precio}</p>

                        <p>Cantidad: ${producto.cantidad}</p>

                        <button class="btn btn-danger btn-eliminar-producto" data-indice="${indice}">
                            Eliminar
                        </button>
                    </div>
                </div>
            </article>
        `;
    });

    const botonesEliminar = document.querySelectorAll(".btn-eliminar-producto");

    botonesEliminar.forEach(function(boton) {
        boton.addEventListener("click", function() {

            const indice = boton.getAttribute("data-indice");

            carrito.splice(indice, 1);

            localStorage.setItem("carrito", JSON.stringify(carrito));

            mostrarCarrito();

        });
    });
}

mostrarCarrito();

const btnRealizarCompra = document.getElementById("btnRealizarCompra");

btnRealizarCompra.addEventListener("click", function() {

    if (carrito.length === 0) {
        alert("No hay productos en el carrito.");
        return;
    }

    alert("Compra realizada con éxito!");

    localStorage.removeItem("carrito");

    carrito = [];

    mostrarCarrito();

});