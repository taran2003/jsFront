import './CSS/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Routes/Login';
import Register from './Routes/Register';
import Main from './Routes/Main';
import Comment from './Routes/Comments';
import User from './Routes/User';
import PrivateRoute from './Routes/PrivateRoute';
import AuthProvider from './Providers/AuthProvider';
import PostProvider from './Providers/PostProvider';
import CommentProvider from './Providers/CommentProvider';
import Logout from "./Routes/Logout";
import PostCreate from './Routes/AddPost';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
                <PostProvider>
                    <Routes>
                        <Route path="/main" element={<PrivateRoute><Main /></PrivateRoute>} />
                        <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
                        <Route path="/addPost" element={<PrivateRoute><PostCreate /></PrivateRoute>} />
                        <Route path="/" element={<PrivateRoute><Main /></PrivateRoute>} />
                    </Routes>
                    <CommentProvider>
                        <Routes>
                            <Route path="/comment" element={<PrivateRoute><Comment /></PrivateRoute>} />
                        </Routes>
                    </CommentProvider>
                </PostProvider>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);