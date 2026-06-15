# Busticaria

## Autor

Diego Ahualli

---

# Descripción

Busticaria es una aplicación web de ecommerce desarrollada como trabajo integrador para la materia Aplicaciones Web 1.

La aplicación simula una tienda online funcional con distintas categorías de productos, sistema de autenticación, carrito de compras y renderizado dinámico de productos mediante consumo de API.

El proyecto fue desarrollado aplicando buenas prácticas de estructura, reutilización de componentes, organización modular y diseño responsive.

---

# Funcionalidades Implementadas

## Primera Etapa

* Estructura base del sitio.
* Página principal (Home).
* Página de login.
* Página de registro.
* Páginas de categorías de productos.
* Navegación entre páginas.

---

## Segunda Etapa

* Aplicación de estilos con Bootstrap y CSS personalizado.
* Navbar responsive reutilizable mediante componente JavaScript.
* Paleta de colores personalizada.
* Diseño centrado en experiencia de usuario.
* Implementación inicial de cards de productos.
* Mejora visual general del sitio:

  * Hero principal.
  * Categorías destacadas.
  * Botones personalizados.
  * Diseño responsive.

---

## Tercera Etapa

* Redirección automática al Home luego del login.
* Implementación de logout con redirección al login.
* Creación de una estructura de datos mediante arrays de objetos para gestionar rutas y títulos de páginas.
* Desarrollo de componente reutilizable de navbar para usuarios logueados.
* Organización del proyecto pensando en mantenibilidad y escalabilidad.
* Implementación del componente de cards de productos.
* Funcionalidad para aumentar o disminuir cantidades de productos.
* Preparación de estructuras dinámicas para productos.

---

## Cuarta Etapa

* Integración de API externa mediante fetch().
* Uso de DummyJSON como fuente de datos del ecommerce.
* Renderizado dinámico de productos según categorías.
* Visualización de productos destacados en la página principal.
* Persistencia de usuario logueado mediante sessionStorage.
* Persistencia del carrito mediante localStorage.
* Implementación de página de carrito de compras.
* Visualización dinámica de productos agregados al carrito.
* Posibilidad de eliminar productos del carrito.
* Mejora general en interacción y experiencia de usuario.

---

# Tecnologías Utilizadas

## Tecnologías Base

* HTML5
* CSS3
* JavaScript
* Bootstrap 5

---

## Tecnologías y Herramientas Adicionales

### DummyJSON API

Se utilizó DummyJSON como fuente de datos para obtener productos dinámicamente.

### Características

* API REST gratuita.
* Obtención de productos por categorías.
* Simulación de un ecommerce real.
* Integración sencilla mediante fetch().

### Justificación de uso

La incorporación de una API permitió trabajar con datos dinámicos y mejorar considerablemente la experiencia del usuario, simulando un entorno real de ecommerce.

---

# Estructura del Proyecto

```plaintext
MiTiendaWeb/
│
├── Busticaria/
│   ├── api/
│   ├── assets/
│   ├── components/
│   └── pages/
│   │   └── auth/
│   │   └── carrito/
│   │   └── categories/
│   ├── styles/
│   ├── README.md
│   └── index.html
```

---

# Mejoras Significativas

Las mejoras más importantes implementadas respecto a las entregas anteriores fueron:

* Consumo de API para contenido dinámico.
* Organización modular tipo MVC.
* Reutilización de componentes.
* Persistencia de datos mediante Storage.
* Implementación funcional de carrito de compras.
* Mejoras de experiencia de usuario y diseño responsive.

Estas mejoras permitieron obtener una aplicación más escalable, mantenible y cercana a un ecommerce real.

---

# Publicación del Proyecto

Repositorio GitHub:

https://github.com/DiegoAhualli/MiTiendaWeb

Link del proyecto publicado:

[https://diegoahualli.github.io/MiTiendaWeb/Busticaria/]

---

# Video Explicativo

[AGREGAR LINK DEL VIDEO]

---

# Reflexión Personal

Durante el desarrollo del proyecto pude reforzar conocimientos relacionados con HTML, CSS y JavaScript, especialmente en el manejo del DOM, consumo de APIs, componentes reutilizables y persistencia de datos.

La parte más desafiante fue trabajar con rutas dinámicas y la reutilización de componentes entre distintas páginas del proyecto.

La etapa que más disfruté fue la implementación de funcionalidades dinámicas como el carrito y la carga automática de productos desde la API, ya que permitió que el ecommerce se sintiera mucho más cercano a una aplicación real.

