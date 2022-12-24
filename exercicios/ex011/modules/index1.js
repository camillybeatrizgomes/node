const Sequelize = require('sequelize')

const sequelize = new Sequelize('postapp', 'root', 'tete1522', {
    host: "localhost",
    dialect: "mysql",
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}