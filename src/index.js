import React from 'react';
import { createRoot } from 'react-dom/client'; // Importando createRoot de 'react-dom/client' em vez de 'react-dom'
import './index.css';
import Calculator from './main/calculator';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
);    

reportWebVitals();
