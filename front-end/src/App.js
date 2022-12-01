import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      {/* <Route exact path="/register" component={ Register } /> */}
      <Route exact path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;
