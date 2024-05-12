function verCarrito() {
  // Encuentra el elemento donde quieres mostrar el carrito
  var contenedorCarrito = document.getElementById('contenedorCarrito');
  // Asegúrate de que el contenedor esté vacío antes de agregar los nuevos elementos
  contenedorCarrito.innerHTML = '';

  // Recorre el carrito y crea los elementos HTML para cada producto
  carrito.forEach(function(producto, index) {
    var div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `
      <p>${producto.nombre}</p>
      <p>Precio: ${producto.precio}</p>
      <button onclick="removerDelCarrito(${index})">Remover</button>
    `;
    contenedorCarrito.appendChild(div);
  });
}

function removerDelCarrito(index) {
  // Remueve el producto del carrito
  carrito.splice(index, 1);
  // Actualiza la visualización del carrito
  verCarrito();
}


