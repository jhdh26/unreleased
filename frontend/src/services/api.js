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

export const getUserProfile = async (token) => {
    const response = await api.get('/profile', {
        headers: {
            Authorization: `Bearer ${token}`, // Adicione o token no cabeçalho da requisição
        },
    });
    return response.data; // Retorne os dados do perfil
};



// Exporta o axios para uso em outros arquivos, se necessário
export default api;
