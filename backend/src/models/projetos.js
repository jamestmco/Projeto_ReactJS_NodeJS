var Sequelize = require('sequelize');
var sequelize = require('./database');

var projetos = sequelize.define('projetos', {
    id_projetos: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_equipas: Sequelize.INTEGER,
    nome: Sequelize.STRING,
    data_inicio: Sequelize.DATE,
    data_fim: Sequelize.DATE,
    


   
},
    {
        timestamps: false,
        tableName: "projetos",
    });


module.exports = projetos


