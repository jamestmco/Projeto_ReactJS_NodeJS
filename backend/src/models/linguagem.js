var Sequelize = require('sequelize');
var sequelize = require('./database');


var linguagem = sequelize.define('linguagem', {
    id_linguagem: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: Sequelize.STRING,
    tipo: Sequelize.INTEGER,

},
    {
        timestamps: false,
        tableName: "linguagem",
    });


module.exports = linguagem