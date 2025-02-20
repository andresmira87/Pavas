import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../services/api';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  // Obtener todas las categorías al cargar el componente
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  // Eliminar una categoría
  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    alert('Categoría eliminada exitosamente');
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div>
      <h1>Lista de Categorías</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => handleDeleteCategory(category.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;