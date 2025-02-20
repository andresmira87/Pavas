
const content = document.getElementById('content');

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

const handleCreateProduct = async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = parseFloat(document.getElementById('price').value);

  const newProduct = { name, description, price, category_id: 1 };

  try {
    const response = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    if (response.ok) {
      alert('Producto creado exitosamente');
      fetchProducts();
    }
  } catch (error) {
    console.error('Error al crear el producto:', error);
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      alert('Producto eliminado exitosamente');
      fetchProducts();
    }
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
  }
};

const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:5000/products');
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
};

fetchProducts();