const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'tete1522', {
    host: "localhost",
    dialect: "mysql"
})

const livro = sequelize.define('livros', {
    titulo: {
        type: Sequelize.STRING
    }, 
    conteudo: {
        type: Sequelize.TEXT
    }
})

livro.create({
    titulo: "Alguma Coisa",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
})

//livro.sync({force: true})

const usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

usuario.create({
    nome: "Camilly",
    sobrenome: "Beatriz",
    idade: 19,
    email: "camilly@gmail.com"
})

//usuario.sync({force: true})