// routes/user.js
import express from 'express'
import { PrismaClient } from '@prisma/client';
import isAdmin from '../middlewares/isAdmin';
const router = express.Router();
const prisma = new PrismaClient();

// Rota para obter o perfil do usuário
router.get('/profile', isAdmin, async (req, res) => {
    try {
        const userId = req.user.id; // Obtém o ID do usuário do token JWT
        const userProfile = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                numero: true,
                endereco: true,
                imgPerfil: true
            },
        });

        if (!userProfile) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        res.status(200).json(userProfile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar perfil do usuário.' });
    }
});

export default router