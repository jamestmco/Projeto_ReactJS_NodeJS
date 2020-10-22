var Sequelize = require('sequelize');
var sequelize = require('./database');

var equipas = sequelize.define('equipas', {
    id_equipas: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_feria_utilizador: Sequelize.INTEGER,
    id_colaborador: Sequelize.INTEGER,
    id_projeto: Sequelize.INTEGER,
    data: Sequelize.DATE,



   
},
    {
        timestamps: false,
        tableName: "equipas",
    });


module.exports = equipas


