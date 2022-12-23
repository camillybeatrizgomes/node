const Sequelize = require('sequelize')

const sequelize = new Sequelize('postapp', 'root', 'tete1522', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}