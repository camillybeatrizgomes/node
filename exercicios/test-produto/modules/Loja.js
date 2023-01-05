const Sequelize = require('sequelize')
const index = require('./index')
const sequelize = new Sequelize('produto', 'root', 'tete1522', {
    host: "localhost",
    dialect: "mysql",
})

const Loja = index.sequelize.define('produto',{
    nome: {
        type: index.Sequelize.STRING
    },
    estoque: {
        type: index.Sequelize.STRING
    },
    descricao: {
        type: index.Sequelize.STRING
    },
    preco: {
        type: index.Sequelize.DOUBLE
    }
});

module.exports = Loja

//Loja.sync({force: true})