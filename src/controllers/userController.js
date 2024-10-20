import User from "../models/User.js"
import crypto from 'node:crypto'

export const getUsers = async (req, res) => {
    try {
        const user = await User.findAll()
        res.status(200).json(user)
    } catch (err) {
        console.error(err)
    }
}

export const createUSer = async (req, res) => {
    try {
        const user = await User.create({
            id: crypto.randomUUID(),
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        })
        res.status(201).json(user)
    } catch (err) {
        console.error(err)
    }

}

export const updateUser = async (req, res) => {
    try {
        const user = await User.update(
            {
                id: req.params.id,
                name: req.body.name,
                age: req.body.age,
                email: req.body.age
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        res.status(201).json({message: `Usuário com id ${req.params.id} foi atualizado com sucesso`})
    } catch (err) { 
        console.error(err)
    }

}

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({message:`Usuário do id ${req.params.id} foi excluído com sucesso.`})
    } catch (err) {
        console.error(err)
    }

}