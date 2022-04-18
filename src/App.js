import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grommet } from 'grommet';

import ProductsPage from './pages/products-page';
import MainLayout from './components/layouts/main-layout';

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
    <Route path='/' element={<MainLayout><ProductsPage /></MainLayout>} />
    <Route path='profile/' element={<div>profile</div>} />
    <Route path='cart/' element={<div>cart</div>} />
  </Routes>
);

const App = () => {
  return (
    <Router>
      <Grommet theme={theme} full>
        {routes}
      </Grommet>
    </Router>
  )
}

export default App;
