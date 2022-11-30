import './CSS/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Routes/Login';
import Register from './Routes/Register';
import Main from './Routes/Main';
import PrivateRoute from './PrivateRoute';
import AppProvider from './Providers/AppProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <React.StrictMode>
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/main" element={<PrivateRoute><Main/></PrivateRoute>}/>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    </React.StrictMode>
);
