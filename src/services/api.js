import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // URL base del backend
});

// Funciones para Productos
export const getProducts = () => api.get('/products'); // Obtener todos los productos
export const getProductById = (id) => api.get(`/products/${id}`); // Obtener un producto por su ID
export const createProduct = (product) => api.post('/products', product); // Crear un nuevo producto
export const updateProduct = (id, product) => api.put(`/products/${id}`, product); // Actualizar un producto existente
export const deleteProduct = (id) => api.delete(`/products/${id}`); // Eliminar un producto

// Funciones para Categorías
export const getCategories = () => api.get('/categories'); // Obtener todas las categorías
export const getCategoryById = (id) => api.get(`/categories/${id}`); // Obtener una categoría por su ID
export const createCategory = (category) => api.post('/categories', category); // Crear una nueva categoría
export const updateCategory = (id, category) => api.put(`/categories/${id}`, category); // Actualizar una categoría existente
export const deleteCategory = (id) => api.delete(`/categories/${id}`); // Eliminar una categoría

export default api;