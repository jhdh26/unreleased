import express from 'express';
import authenticateToken from '../../backend/middlewares/authenticateToken.js';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/orders/create', authenticateToken, async (req, res) => {
    const { userId } = req.user;  // O ID do usuário vem do payload do token
    const { productId, diasAluguel } = req.body;  // Recebe o ID do produto e os dias de aluguel

    console.log('Dados recebidos:', { userId, productId, diasAluguel });

    try {
        // Aqui, o Prisma vai automaticamente lidar com a conversão de string para ObjectId
        const product = await prisma.products.findUnique({
            where: {
                id: productId // O Prisma lida com a conversão automaticamente
            }
        });

        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        const newOrder = await prisma.order.create({
            data: {
                userId,
                productId,  // O Prisma vai entender automaticamente o tipo
                diasAluguel,
            },
            include: {
                user: {
                    select: {
                        name: true, // Inclui o nome do usuário
                    },
                },
            },
        });

        const orderWithUserName = {
            ...newOrder,
            userName: newOrder.user.name,
        };

        res.status(201).json(orderWithUserName);
    } catch (error) {
        console.error('Erro ao criar a ordem:', error);
        res.status(500).json({ message: 'Erro ao criar a ordem' });
    } finally {
        await prisma.$disconnect();
    }
});

router.get('/orders/create/:id', authenticateToken, async (req, res) => {
    const { userId } = req.user;  // O userId vem do payload do token
    const { id } = req.params; // Pega o ID da URL

    console.log('userId extraído do token:', userId);  // Verifique se o userId está sendo extraído corretamente
    console.log('ID do pedido recebido:', id);  // Verifique se o ID está sendo passado corretamente

    if (!userId) {
        console.log('Erro: ID do usuário não encontrado no token');
        return res.status(400).json({ message: 'ID do usuário não encontrado no token' });
    }

    try {
        // Se o ID do pedido for string, não é necessário converter para número
        const order = await prisma.order.findUnique({
            where: { id: id }, // Passa o ID diretamente, sem converter para número
            include: {
                product: true, // Inclui dados do produto relacionado ao pedido
            }
        });

        if (!order) {
            console.log('Erro: Pedido não encontrado');
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }

        console.log('Pedido encontrado:', order);
        res.status(200).json(order);
    } catch (error) {
        console.error('Erro ao buscar pedido:', error);
        res.status(500).json({ message: 'Erro ao buscar pedido' });
    } finally {
        await prisma.$disconnect();
    }
});

// Exemplo de rota para atualizar a quantidade do produto
router.put('/products/:productId/decrease', async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await prisma.products.findUnique({
            where: { id: productId },
        });

        if (!product) {
            return res.status(404).json({ error: "Produto não encontrado." });
        }

        const updatedProduct = await prisma.products.update({
            where: { id: productId },
            data: {
                quantidade: {
                    decrement: 1,
                },
            },
        });

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error("Erro ao atualizar a quantidade do produto:", error);
        res.status(500).json({ error: "Erro ao processar a requisição." });
    }
});



export default router;
