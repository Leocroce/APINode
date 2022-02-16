const User = require('../models/User')

module.exports = class UserController {
    static async createUser(req, res) {
        const user = {
            email: req.body.email,
            uid: (req.body.email.slice(0,5)+req.body.displayName.slice(0,3)).toUpperCase(),
            displayName: req.body.displayName,
            status: true
        }

        await User.create(user)

        if(!user) {
            res.status(402).json({ message: 'Parametros/User/não consistente'})
        } 

        res.status(201).json({ message: `usuario-${user.displayName}-criado`})
    }

    static async showUser(req, res) {
        const user = await User.findAll({ raw: true })

        if(!user) {
            res.status(402).json({ message: 'lista-usuarios-parametro-nulo'})
            return
        }
        
        res.status(202).json(user)
    }
}