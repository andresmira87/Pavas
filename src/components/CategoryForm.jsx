import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  // Obtener una categoría específica (para editar)
  const fetchCategory = async () => {
    if (id) {
      try {
        const response = await fetch(`http://localhost:3000/api/categories/${id}`);
        const data = await response.json();
        setName(data.name);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    }
  };

  useEffect(() => {
    if (id) fetchCategory();
  }, [id]);

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = { name };

    try {
      if (id) {
        // Editar categoría
        await fetch(`http://localhost:3000/api/categories/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(category),
        });
      } else {
        // Crear categoría
        await fetch('http://localhost:3000/api/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(category),
        });
      }
      navigate('/categories'); // Redirigir a la lista de categorías
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Categoría' : 'Nueva Categoría'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <button type="submit">{id ? 'Guardar Cambios' : 'Crear Categoría'}</button>
      </form>
    </div>
  );
};

export default CategoryForm;