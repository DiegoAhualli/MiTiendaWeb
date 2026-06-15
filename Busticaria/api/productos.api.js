const API_URL = "https://dummyjson.com/products?limit=400";

async function obtenerProductos() {

    const respuesta = await fetch(API_URL);

    const datos = await respuesta.json();

    return datos.products;
}