import express from 'express'
import authenticateToken from '../middlewares/authenticateToken.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

// Rota de perfil
router.get('/profile', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        
        // Extrai o userId do token

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
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        res.json(userProfile);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter perfil.', error });
    }
});



export default router