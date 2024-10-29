// src/services/api.js
import axios from 'axios';

// Define a URL base da API
const api = axios.create({
    baseURL: 'http://localhost:5000/', // Substitua pela URL correta da sua API
});

// Função para registrar um novo usuário
export const registerUser = async (userData) => {
    const response = await api.post('/register', userData);
    return response.data;
};

// Função para realizar login
export const loginUser = async (credentials) => {
    const response = await api.post('/login', credentials);
    return response.data; // A resposta deve incluir { token, userId }
};

// Função para obter os dados do usuário
export const getUserData = async (userId) => {
    const response = await api.get(`/profile/${userId}`); // Chamada para a rota que retorna os dados do perfil
    return response.data;
};

// Exporta o axios para uso em outros arquivos, se necessário
export default api;
