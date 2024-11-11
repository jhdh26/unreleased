import express from 'express'
import authenticateToken from '../middlewares/authenticateToken.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()


//ADICIONAR ITEM

// ADICIONAR ITEM
router.post('/registroitens', async (req, res) => {
    try {
        const { name, categoria, descricao, imagem, preco, quantidade } = req.body;

        // Verifique se todos os campos necessários foram fornecidos
        if (!name || !categoria || !descricao || !imagem || !preco || !quantidade) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        // Criando o produto no banco de dados
        await prisma.products.create({
            data: {
                name,
                categoria,
                descricao,
                imagem,
                preco,
                quantidade,
            },
        });

        res.status(201).json({ message: 'Produto adicionado' });
    } catch (err) {
        console.error('Erro ao adicionar produto:', err);
        res.status(500).json({ message: 'Erro interno', error: err.message });
    }
});


//ATUALIZAR ITEM

// ATUALIZAR ITEM
router.put('/registroitens/:id', async (req, res) => {
    try {
        const { name, categoria, descricao, imagem, preco, quantidade } = req.body;
        const { id } = req.params;

        // Verifique se todos os campos necessários foram fornecidos
        if (!name || !categoria || !descricao || !imagem || !preco || !quantidade) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        // Verificar se o produto existe
        const productExists = await prisma.products.findUnique({
            where: { id }
        });

        if (!productExists) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        // Atualizar o produto no banco de dados
        await prisma.products.update({
            where: {
                id,
            },
            data: {
                name,
                categoria,
                descricao,
                imagem,
                preco,
                quantidade,
            },
        });

        res.status(200).json({ message: 'Produto Atualizado' });
    } catch (err) {
        console.error('Erro ao atualizar produto:', err);
        res.status(500).json({ message: 'Erro interno', error: err.message });
    }
});


//DELETAR ITEM

router.delete('/registroitens/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Verifique se o produto está sendo utilizado em algum pedido
        const orders = await prisma.order.findMany({
            where: {
                productId: id,
            },
        });

        // Se houver pedidos, remova-os primeiro
        if (orders.length > 0) {
            await prisma.order.deleteMany({
                where: {
                    productId: id,
                },
            });
        }

        // Agora exclua o produto
        const product = await prisma.products.delete({
            where: {
                id: id,
            },
        });

        res.status(200).json({ message: 'Produto Deletado', product });
    } catch (err) {
        console.error('Erro ao deletar produto:', err);
        res.status(500).json({ message: 'Erro interno', error: err.message });
    }
});




router.get('/registroitens',  async (req, res) => {
    try {
        const products = await prisma.products.findMany()

        res.status(200).json(products)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Erro interno' })
    }
});




export default router