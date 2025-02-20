import React, { useState } from 'react';
import { createProduct } from '../services/api';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    category_id: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(formData);
    alert('Producto creado exitosamente');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <textarea
        placeholder="Descripción"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Precio"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
      />
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default ProductForm;