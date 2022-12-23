const index = require('./index1')

const post = index.sequelize.define('postagens',{
    titulos: {
        type: index.Sequelize.STRING
    },
    conteudo: {
        type: index.Sequelize.TEXT
    }
});

module.exports = post

//post.sync({force: true})