import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grommet } from 'grommet';

import MainLayout from './components/layouts/main-layout';
import { ProductsPage, SingleProductPage } from './pages';

const theme = {
  global: {
    colors: {
      brand: '#47290F',
      "brand-1": '#CC9955',
      border: "brand",
      text: "light-1"
    },
    font: {
      family: 'Caveat',
      size: '20px',
      height: '22px',
    },
    hover: {
      background: {
        color: { dark: "brand-1", light: "brand-1" },
        opacity: .2
      },
      color: "brand"
    }
  },
  checkBox: {
    border: {
      color: "brand",
      width: "2px"
    },
    check: {
      extend: "",
      radius: "4px",
      thickness: "2px",

    },
    color: "brand",
    extend: "",
    gap: "small",
    hover: {
      border: {
        color: "brand",
        background: {
          color: { dark: "brand", light: "brand" }
        }
      }
    },
    size: "18px",
    toggle: {
      background: "brand",
      color: "brand",
      extend: "",
      radius: "24px",
      size: "48px"
    }
  }
};

const routes = (
  <Routes>
    <Route path='/' element={<MainLayout><ProductsPage /></MainLayout>} />
    <Route path='/products/' element={<MainLayout><ProductsPage /></MainLayout>} />
    <Route path='/products/:id' element={<MainLayout><SingleProductPage /></MainLayout>} />
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
