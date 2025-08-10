import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx';
import Letter from './Pages/Letter/Letter.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
     <App />
  </BrowserRouter>
  
)
