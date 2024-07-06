import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path='/' element={<App />}> </Route>
        <Route path='/form' element={<FormPage />}> </Route>
      </Routes>
  </Router>
  // <React.StrictMode>
    
  // </React.StrictMode>
);
