// src/components/AuthContext/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// Criação do contexto
export const AuthContext = createContext();

// Criação do AuthProvider
export const AuthProvider = ({ children }) => {
    // Armazenar informações de autenticação
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [userId, setUserId] = useState(null); // Adicione o estado para o userId

    // Função de login
    const login = (id) => { // Modifique para aceitar um id
        setIsAuthenticated(true);
        setUserId(id); // Defina o userId
        localStorage.setItem('token', 'seu_token_aqui'); // Armazene o token
        localStorage.setItem('userId', id); // Armazene o userId no localStorage, se necessário
    };

    // Função de logout
    const logout = () => {
        setIsAuthenticated(false);
        setUserId(null); // Limpe o userId
        localStorage.removeItem('token'); // Remova o token
        localStorage.removeItem('userId'); // Remova o userId do localStorage, se necessário
    };

    // Verifica se o usuário está autenticado ao carregar a aplicação
    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId'); // Obtenha o userId do localStorage
        if (token) {
            setIsAuthenticated(true);
            setUserId(storedUserId); // Defina o userId se o token existir
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}> {/* Adicione userId aqui */}
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar o AuthContext em outros componentes
export const useAuth = () => {
    return useContext(AuthContext);
};
