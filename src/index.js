import './CSS/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Routes/Login';
import Register from './Routes/Register';
import Main from './Routes/Main';
import PrivateRoute from './Routes/PrivateRoute';
import AuthProvider from './Providers/AuthProvider';
import Logout from "./Routes/Logout";
import PostCreate from './Routes/AddPost';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/main" element={<PrivateRoute><Main/></PrivateRoute>}/>
                    <Route path="/addPost" element={<PrivateRoute><PostCreate/></PrivateRoute>}/>
                    <Route path="/" element={<PrivateRoute><Main/></PrivateRoute>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);