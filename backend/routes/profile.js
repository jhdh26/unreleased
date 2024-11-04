import express from 'express';
import authenticateToken from '../middlewares/authenticateToken.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Rota de perfil
router.get('/profile', authenticateToken, async (req, res) => {
    try {
        const { userId } = req.user; // Extrai o userId do token
        
        const userProfile = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                imgPerfil: true,
                endereco: true,
                numero: true
            }
        });

        if (!userProfile) {
            return res.status(404).json({ success: false, message: 'Usuário não encontrado.' });
        }

        res.status(200).json({ success: true, data: userProfile });
    } catch (error) {
        console.error('Erro ao obter perfil:', error);
        res.status(500).json({ success: false, message: 'Erro ao obter perfil.', error: error.message });
    }
});

// Rota para atualizar o perfil
router.put('/profile', authenticateToken, async (req, res) => {
    const profile = req.body;
    console.log('Dados recebidos:', profile); // Log dos dados recebidos
    console.log('User ID:', profile); // Verifica o conteúdo do req.user

    try {
        const { userId } = req.user;
        const updatedProfile = await prisma.user.update({
            where: { id: userId },
            data: {
                email: profile.email,
                imgPerfil: profile.imgPerfil,
                endereco: profile.endereco,
                numero: profile.numero
            }
        });

        res.status(200).json({ success: true, data: updatedProfile });
    } catch (error) {
        console.error('Erro ao atualizar perfil:', error);
        res.status(500).json({ success: false, message: 'Erro ao atualizar perfil.', error: error.message });
    }
});


// Rota para excluir a imagem do perfil
router.delete('/profile/image', authenticateToken, async (req, res) => {
    try {
        const { userId } = req.user; // Extrai o userId do token

        // Atualiza a imagem de perfil para null ou uma string vazia
        await prisma.user.update({
            where: { id: userId },
            data: {
                imgPerfil: null // Ou use uma string vazia: ''
            }
        });

        res.status(200).json({ success: true, message: 'Imagem de perfil excluída com sucesso.' });
    } catch (error) {
        console.error('Erro ao excluir imagem do perfil:', error);
        res.status(500).json({ success: false, message: 'Erro ao excluir imagem do perfil.', error: error.message });
    }
});


export default router;
