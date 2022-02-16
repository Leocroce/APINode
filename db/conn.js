const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('apitasks', 'root', 'senha.', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Banco de dados conectado')
} catch(err) {
    console.log('A ORM não se conectou: ', err)
}

module.exports = sequelize