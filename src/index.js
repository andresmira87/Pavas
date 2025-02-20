const content = document.getElementById('content');

// Función para renderizar la lista de productos
const renderProducts = (products) => {
  content.innerHTML = `
    <h2>Lista de Productos</h2>
    <ul>
      ${products
        .map(
          (product) => `
          <li>
            ${product.name} - $${product.price}
            <button onclick="deleteProduct(${product.id})">Eliminar</button>
          </li>
        `
        )
        .join('')}
    </ul>
    <button onclick="renderProductForm()">Crear Producto</button>
  `;
};

// Función para renderizar el formulario de creación de productos
const renderProductForm = () => {
  content.innerHTML = `
    <h2>Crear Producto</h2>
    <form onsubmit="handleCreateProduct(event)">
      <input type="text" id="name" placeholder="Nombre" required />
      <textarea id="description" placeholder="Descripción" required></textarea>
      <input type="number" id="price" placeholder="Precio" required />
      <button type="submit">Crear Producto</button>
    </form>
  `;
};

// Función para manejar la creación de un producto
const handleCreateProduct = async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = parseFloat(document.getElementById('price').value);

  const newProduct = { name, description, price, category_id: 1 };

  try {
    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    console.log('Respuesta del servidor:', response); // Depuración

    if (response.ok) {
      alert('Producto creado exitosamente');
      fetchProducts(); // Actualizar la lista de productos después de crear uno nuevo
    } else {
      const errorData = await response.json(); // Leer el mensaje de error del servidor
      alert(`Error al crear el producto: ${errorData.message || 'Error desconocido'}`);
    }
  } catch (error) {
    console.error('Error al crear el producto:', error);
    alert('Error al crear el producto. Revisa la consola para más detalles.');
  }
};

// Función para eliminar un producto
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    });

    console.log('Respuesta del servidor:', response); // Depuración

    if (response.ok) {
      alert('Producto eliminado exitosamente');
      fetchProducts(); // Actualizar la lista de productos después de eliminar uno
    } else {
      const errorData = await response.json(); // Leer el mensaje de error del servidor
      alert(`Error al eliminar el producto: ${errorData.message || 'Error desconocido'}`);
    }
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    alert('Error al eliminar el producto. Revisa la consola para más detalles.');
  }
};

// Función para obtener la lista de productos desde el servidor
const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:5000/products');
    console.log('Respuesta del servidor:', response); // Depuración

    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const products = await response.json();
    renderProducts(products); // Renderizar la lista de productos
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    alert('Error al obtener los productos. Revisa la consola para más detalles.');
  }
};

// Cargar la lista de productos al iniciar la página
fetchProducts();