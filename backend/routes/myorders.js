import express from 'express';
import authenticateToken from '../middlewares/authenticateToken.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Rota para pegar os pedidos do usuário
router.get('/orders/user', authenticateToken, async (req, res) => {
    try {
        // O ID do usuário está disponível através do token JWT decodificado
        const userId = req.user.id;

        // Buscando os pedidos do usuário no banco de dados
        const orders = await prisma.order.findMany({
            where: {
                userId: userId, // Filtra os pedidos pelo ID do usuário
            },
            include: {
                product: true, // Inclui os produtos associados a cada pedido
            },
        });

        if (orders.length === 0) {
            return res.status(404).json({ message: 'Nenhum pedido encontrado' });
        }

        // Retorna os pedidos encontrados
        res.status(200).json(orders);
    } catch (error) {
        console.error("Erro ao carregar os pedidos:", error);
        res.status(500).json({ message: 'Erro ao processar a requisição' });
    }
});

export default router;
