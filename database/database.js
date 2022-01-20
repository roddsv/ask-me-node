const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'rodrigo', 'gbmax1234', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection