import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductsPage from './pages/products-page';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      brand2: '#F9CC9D'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
    hover: {
      background: {
        color: { dark: "brand2", light: "brand2" },
        opacity: .2
      }
    }
  },
};

const routes = (
  <Routes>
    <Route path='/' element={<ProductsPage theme={theme} />} />
    <Route path='profile/' element={<div>profile</div>} />
    <Route path='cart/' element={<div>cart</div>} />
  </Routes>
);

const App = () => {
  return (
    <Router>
      {routes}
    </Router>
  )
}

export default App;
