const Sequelize = require('sequelize')
const index = require('./index')
const sequelize = new Sequelize('vendedor', 'root', 'tete1522', {
    host: "localhost",
    dialect: "mysql",
})

const Loja = index.sequelize.define('vendedor',{
    nome: {
        type: index.Sequelize.STRING
    },
    data_de_nascimento: {
        type: index.Sequelize.INTEGER(11)
    },
    cnpj: {
        type: index.Sequelize.STRING(18)
    },
    nome_da_loja: {
        type: index.Sequelize.STRING
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