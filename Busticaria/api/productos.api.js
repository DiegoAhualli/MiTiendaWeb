const API_URL = "https://dummyjson.com/products";

async function obtenerProductos() {

    const respuesta = await fetch(API_URL);

    const datos = await respuesta.json();

    return datos.products;
}