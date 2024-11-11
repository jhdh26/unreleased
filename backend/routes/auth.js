import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

// Registro
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                isAdmin: false, 
            },
        });
        res.status(201).json({ message: 'Usuário registrado com sucesso.' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar usuário.' })
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Email ou senha incorretos.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email ou senha incorretos.' });
        }

        // Criação do token JWT com o id do usuário
        const token = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Retornando o token e o id do usuário na resposta
        res.json({ token, userId: user.id }); 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao realizar login.' });
        console.log(error)
    }
});


export default router