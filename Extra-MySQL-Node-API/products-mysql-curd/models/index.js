const { Sequelize } = require("sequelize");

// Initialize Sequelize
const sequelize = new Sequelize('demo_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

// Test connection
sequelize.authenticate()
                .then(()=>console.log('Database connected...'))
                .catch((err)=>console.log('Error: ', err))

module.exports = sequelize