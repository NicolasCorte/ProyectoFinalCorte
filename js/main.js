let productos = [];

fetch("./productos.json")
  .then((response) => response.json())
  .then((data) => {
    productos = data;
    cargarProductos(productos);
  });

const ContenidoMenu = document.querySelector("#contenido-menu");

function cargarProductos(productosElegidos) {
  ContenidoMenu.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <div class="row">
    <img src="${producto.imagen}" alt="${producto.titulo}" />
    <h3>${producto.titulo}</h3>
    <p>${producto.parrafo}</p>
    <div class="in-text">
      <div class="precio">
        <h6>${producto.precio}</h6>
      </div>
    </div>
  </div>
      `;

    ContenidoMenu.append(div);
  });
}
