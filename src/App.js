import React from 'react';

import MainLayout from './components/layouts/main-layout';
import Test from './components/test/test';

import ProductGrid from './components/product-grid';
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

const App = () => {
  return (
    // <MainLayout theme={theme}>
    //   {/* <Test /> */}
    //   <ProductGrid />
    // </MainLayout>
    <ProductsPage theme={theme} />
  );
}

export default App;
