var Sequelize = require('sequelize');
var sequelize = require('./database');
// importa o modelo – chave forasteira developer
var developer = require('./dev');
var gestor = require('./gp');
var rh = require('./rh');

var utilizador = sequelize.define('utilizador', {
    id_utilizador: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: Sequelize.STRING,
    apelido: Sequelize.STRING,
    senioridade: Sequelize.STRING,
    /*foto: Sequelize.STRING,*/
    email: Sequelize.STRING,
    password: Sequelize.STRING,
   
},
    {
        timestamps: false,
        tableName: "utilizador",
    });

utilizador.belongsTo(developer)
utilizador.belongsTo(gestor)
utilizador.belongsTo(rh)
module.exports = utilizador


