var Sequelize = require('sequelize');
var sequelize = require('./database');

var ferferias_utilizadoresias = sequelize.define('ferias_utilizadores', {
    id_feria_utilizador: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_feria: Sequelize.INTEGER,
    id_utilizador: Sequelize.INTEGER,



   
},
    {
        timestamps: false,
        tableName: "ferias_utilizadores",
    });


module.exports = ferias_utilizadores


