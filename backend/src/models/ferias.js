var Sequelize = require('sequelize');
var sequelize = require('./database');

var ferias = sequelize.define('ferias', {
    id_ferias: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_feria_utilizador: Sequelize.INTEGER,
    data_inicio: Sequelize.DATE,
    data_fim: Sequelize.DATE,



   
},
    {
        timestamps: false,
        tableName: "ferias",
    });


module.exports = ferias


