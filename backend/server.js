import express from 'express'
import cors from 'cors'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import productsRoutes from './routes/products.js'

import auth from './middlewares/auth.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use("/", publicRoutes)
app.use("/", productsRoutes)
app.use("/", privateRoutes)

app.listen(5000,() => console.log('Servidor rodando'))