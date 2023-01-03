const Sequelize = require('sequelize')
const index = require('./index')
const sequelize = new Sequelize('cliente', 'root', 'tete1522', {
    host: "localhost",
    dialect: "mysql",
})

const Loja = index.sequelize.define('cliente',{
    nome: {
        type: index.Sequelize.STRING
    },
    data_de_nascimento: {
        type: index.Sequelize.STRING(11)
    },
    cpf: {
        type: index.Sequelize.STRING(14)
    },
    email: {
        type: index.Sequelize.STRING(100)
    },
    senha: {
        type: index.Sequelize.STRING(50)
    },
    confirSenha: {
        type: index.Sequelize.STRING(50)
    }
});

module.exports = Loja

//Loja.sync({force: true})