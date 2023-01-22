const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-project-bush-s19120', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports=sequelize;
