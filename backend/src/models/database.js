var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'PI3', /*Nome BD*/
    'postgres',
    'abc', /*Passe*/
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres'
    }
);
module.exports = sequelize;