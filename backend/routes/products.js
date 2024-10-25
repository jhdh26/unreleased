import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()


//ADICIONAR ITEM

router.post('/registroitens' , async (req,res) => {
    try{

        const products = req.body

        await prisma.products.create({
            data: {
                name: products.name,
                categoria: products.categoria,
                descricao: products.descricao,
                imagem: products.imagem,
                preco: products.preco,
                quantidade: products.quantidade
            }
        })

        res.status(201).json({message:'Produto adicionado'})
    }catch(err){
        res.status(500).json({message: 'Erro interno'})
    }
})

//ATUALIZAR ITEM

router.put('/registroitens/:id' , async (req,res) => {
    try{

        const products = req.body

        await prisma.products.update({
            where: {
                id: req.params.id
            },
            data: {
                name: products.name,
                categoria: products.categoria,
                descricao: products.descricao,
                imagem: products.imagem,
                preco: products.preco,
                quantidade: products.quantidade
            }
        })

        res.status(201).json({message:'Produto Atualizado'})
    }catch(err){
        res.status(500).json({message: 'Erro interno'})
    }
})

//DELETAR ITEM

router.delete('/registroitens/:id' , async (req,res) => {
    try{

        const products = req.body

        await prisma.products.delete({
            where: {
                id: req.params.id
            }
        })

        res.status(201).json({message:'Produto Deletado'})
    }catch(err){
        res.status(500).json({message: 'Erro interno'})
    }
})

router.get('/registroitens', async (req, res) => {
    try {
        const products = await prisma.products.findMany()

        res.status(200).json(products)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Erro interno' })
    }
});




export default router
