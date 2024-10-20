import express from 'express'
import useRouter from './routers/routes.js'
import { Sequelize } from 'sequelize'
import config from './config/database.js'
import User from './models/User.js'

const app = express()

app.use(express.json())

const sequelize = new Sequelize(config)

User.init(sequelize)

app.use('/usuarios', useRouter)

sequelize.authenticate()
    .then(() => {
        console.log('Banco de dados conectado')
        app.listen(3000, () => {
            console.log('Servidor rodando 🚀')
        })
    })
    .catch((error) => {
        console.error(error.message)
    })
