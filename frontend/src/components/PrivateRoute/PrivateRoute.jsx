// src/components/PrivateRoute/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? element : <Navigate to="/" />; // Redireciona para a página de login se não estiver autenticado
};

export default PrivateRoute;
