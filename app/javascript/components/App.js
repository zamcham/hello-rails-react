import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </React.StrictMode>
);

export default App;
