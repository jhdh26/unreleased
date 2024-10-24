import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET

//REGISTRO

router.post('/register', async (req, res) => {
    try {
        const user = req.body
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

        await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashPassword
            }
        })

        res.status(201).json({message: 'Conta adicionada'})
    }
    catch (err) {
        res.status(500).json({ message: 'Erro no servidor' })
    }
})

//LOGIN

router.post('/login', async (req, res) => {

    try {
        const userInfo = req.body

        //Busca o usuario no banco de dados
        const user = await prisma.user.findUnique({ where: { email: userInfo.email } })

        //Verifica se o usuario existe
        if (!user) {
            return res.status(404).json({ message: 'Usuario não encontrado' })
        }

        //Verifica se a senha é valida
        const isMatch = await bcrypt.compare(userInfo.password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Senha invalida'})
        }

        //Token

        const token = jwt.sign({ id: user.id}, JWT_SECRET, {expiresIn: '1m'})

        res.status(200).json(token)
    }
    catch (err) {
        res.status(500).json({ message: 'Erro no servidor' })
    }

})

export default router

