// src/components/AuthContext/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// Criação do contexto
export const AuthContext = createContext();

// Criação do AuthProvider
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [userId, setUserId] = useState(localStorage.getItem('userId')); // Inicializa com o userId do localStorage

    // Função de login
    const login = ({ token, id }) => { // Aceita um objeto com token e id
        setIsAuthenticated(true);
        setUserId(id); // Define o userId
        localStorage.setItem('token', token); // Armazena o token
        localStorage.setItem('userId', id); // Armazena o userId
    };

    // Função de logout
    const logout = () => {
        setIsAuthenticated(false);
        setUserId(null);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    };

    // Verifica se o usuário está autenticado ao carregar a aplicação
    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        if (token) {
            setIsAuthenticated(true);
            setUserId(storedUserId);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar o AuthContext em outros componentes
export const useAuth = () => {
    return useContext(AuthContext);
};
