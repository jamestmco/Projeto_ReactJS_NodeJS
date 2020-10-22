var Sequelize = require('sequelize');
var sequelize = require('./database');


var lingua_utilizador = sequelize.define('lingua_utilizador', {
   
    id_lingua_utilizador: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    id_colaborador: Sequelize.INTEGER,
    id_linguagem: Sequelize.INTEGER,
   
},
    {
        timestamps: false,
        tableName: "lingua_utilizador",
    });

    lingua_utilizador.associate = function(models) {
        lingua_utilizador.belongsTo(models.cob, {foreignKey: 'id_colaborador', as: 'id_colaborador'}),
        lingua_utilizador.belongsTo(models.linguagem, {foreignKey: 'id_linguagem', as: 'id_linguagem'})
      };
module.exports = lingua_utilizador
