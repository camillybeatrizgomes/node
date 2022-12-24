const index = require('./index1')

const Post = index.sequelize.define('postagens',{
    titulo: {
        type: index.Sequelize.STRING
    },
    conteudo: {
        type: index.Sequelize.TEXT
    }
});

module.exports = Post

//Post.sync({force: true})