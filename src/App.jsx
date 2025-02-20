import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductDetail from './components/ProductDetail';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Aplicación CRUD</h1>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/new" element={<CategoryForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;