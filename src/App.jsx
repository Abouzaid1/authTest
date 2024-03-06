import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
