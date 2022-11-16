import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import Login from './Routes/Login'
import Register from './Routes/Register'
import {BrowserRouter, Routes, Route} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
