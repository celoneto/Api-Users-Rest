import express from 'express'
import { getUsers, createUSer, updateUser, deleteUser } from '../controllers/userController.js'

const route = express.Router()

//Users
route.get('/todos', getUsers)
route.post('/cadastrar', createUSer)
route.put('/atualizar/:id', updateUser)
route.delete('/deletar/:id', deleteUser)

export default route