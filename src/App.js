import React from 'react';

import MainLayout from './components/layouts/main-layout';
import Test from './components/test/test';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const App = () => {
  return (
    <MainLayout theme={theme}>
      <Test />
    </MainLayout>
  );
}

export default App;
