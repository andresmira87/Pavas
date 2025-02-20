import React, { useState } from 'react';
import { createCategory, updateCategory } from '../services/api';

const CategoryForm = ({ categoryToEdit, onCategoryCreated }) => {
  const [name, setName] = useState(categoryToEdit ? categoryToEdit.name : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryToEdit) {
      await updateCategory(categoryToEdit.id, { name });
      alert('Categoría actualizada exitosamente');
    } else {
      await createCategory({ name });
      alert('Categoría creada exitosamente');
    }
    onCategoryCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la categoría"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">{categoryToEdit ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default CategoryForm;