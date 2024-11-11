import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import productsRoutes from './routes/products.js'
import authRoutes from './routes/auth.js'
import profileRoutes from './routes/profile.js'
import ordersRoutes from './routes/orders.js'
import myOrdersRoutes from './routes/myorders.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", productsRoutes)
app.use("/", authRoutes)
app.use("/", profileRoutes)
app.use("/", ordersRoutes)
app.use("/", myOrdersRoutes)

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));
