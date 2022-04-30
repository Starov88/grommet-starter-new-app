import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grommet } from 'grommet';

import MainLayout from './components/layouts/main-layout';
import { LoginPage, ProductsPage, SingleProductPage } from './pages';

import theme from "./theme";

const routes = (
  <Routes>
    <Route path='/' element={<MainLayout><ProductsPage /></MainLayout>} />
    <Route path='/products/' element={<MainLayout><ProductsPage /></MainLayout>} />
    <Route path='/products/:id' element={<MainLayout><SingleProductPage /></MainLayout>} />
    <Route path='profile/' element={<div>profile</div>} />
    <Route path='cart/' element={<div>cart</div>} />
    <Route path='/auth/' element={<LoginPage />} />
    <Route path='/auth/login' element={<MainLayout><LoginPage /></MainLayout>} />
    <Route path='/auth/registration' element={<div>registration</div>} />
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
