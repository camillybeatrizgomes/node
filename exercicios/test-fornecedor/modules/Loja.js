const Sequelize = require('sequelize')
const index = require('./index')
const sequelize = new Sequelize('fornecedor', 'root', 'tete1522', {
    host: "localhost",
    dialect: "mysql",
})

const Loja = index.sequelize.define('fornecedor',{
    nome: {
        type: index.Sequelize.STRING
    }
});

module.exports = Loja

//Loja.sync({force: true})