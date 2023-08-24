import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Message from './Message';

const App = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </React.StrictMode>
  )
}

export default App