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

// Função para buscar o perfil do usuário
export const getUserProfile = async () => {
    const token = localStorage.getItem('token');
    console.log("Token enviado:", token); // Verifique se o token está presente e correto

    try {
        const response = await api.get('/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Adicionando o console.log para ver os dados do perfil
        console.log("Dados recebidos do backend:", response.data);

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar perfil:", error);
        throw error; // Opcional: Rejoga o erro para tratamento posterior
    }
};

// Função para atualizar o perfil do usuário
export const updateUserProfile = async (userData) => {
    const token = localStorage.getItem('token');
    console.log("Token enviado para atualização:", token); // Verifique se o token está presente e correto

    try {
        const response = await api.put('/profile', userData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Adicionando o console.log para ver os dados atualizados
        console.log("Dados atualizados do perfil:", response.data);

        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar perfil:", error);
        throw error; // Opcional: Rejoga o erro para tratamento posterior
    }
};

// Função para excluir a imagem de perfil do usuário
export const deleteProfilePicture = async () => {
    const token = localStorage.getItem('token');
    console.log("Token enviado para exclusão da imagem:", token); // Verifique se o token está presente e correto

    try {
        const response = await api.delete('/profile/image', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Adicionando o console.log para ver a resposta da exclusão
        console.log("Resposta da exclusão da imagem de perfil:", response.data);

        return response.data;
    } catch (error) {
        console.error("Erro ao excluir imagem do perfil:", error);
        throw error; // Opcional: Rejoga o erro para tratamento posterior
    }
};

// api.js

export const createOrder = async (productId, diasAluguel) => {
    const token = localStorage.getItem('token'); // Obtém o token de autenticação

    try {
        const response = await api.post('/orders/create', {  // Não passa mais o productId na URL
            productId,  // Agora é passado no corpo da requisição
            diasAluguel
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data; // Retorna os dados da resposta da API (inclui o ID da ordem)
    } catch (error) {
        console.error("Erro ao criar pedido:", error);
        throw error; // Rejoga o erro para que possa ser tratado em outro lugar, se necessário
    }
};


export const getOrder = async (orderId) => {
    const token = localStorage.getItem('token');
    try {
        const response = await api.get(`/orders/create/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar detalhes do pedido:", error);
        throw error; // Rethrow para tratamento posterior
    }
};

export const decreaseProductQuantity = async (productId) => {
    try {
        const response = await api.put(`/products/${productId}/decrease`);
        return response.data;
    } catch (err) {
        console.error("Erro ao diminuir quantidade do produto", err);
        throw err;
    }
};  

// api.js

// Função para buscar os pedidos do usuário
export const getUserOrders = async () => {
    const token = localStorage.getItem('token'); // Obtém o token de autenticação

    try {
        const response = await api.get('/orders/user', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; // Retorna os pedidos do usuário
    } catch (error) {
        console.error("Erro ao buscar os pedidos:", error);
        throw error; // Lança o erro para ser tratado no frontend
    }
};




// Exporta o axios para uso em outros arquivos, se necessário
export default api;
