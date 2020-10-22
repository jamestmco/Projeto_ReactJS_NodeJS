var Sequelize = require('sequelize');
var sequelize = require('./database');
//var developer = require('./dev');
//var gestor = require('./gp');
//var rh = require('./rh');
var linguagem = require('./linguagem');
var colaborador = sequelize.define('colaborador', {
    id_colaborador:{ 
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
},
nome: Sequelize.STRING,
apelido: Sequelize.STRING,
cargo: Sequelize.INTEGER,
senioridade: Sequelize.STRING,
disponibilidade: Sequelize.BOOLEAN, //Erro
linguas: Sequelize.STRING,
//web: Sequelize.STRING,
//programacao: Sequelize.STRING,
//basedados: Sequelize.STRING,
inicioferias: Sequelize.STRING,
fimferias: Sequelize.STRING
},
    {
        timestamps: false,
        tableName: "colaborador",
    });


    //colaborador.belongsTo(developer)
    //colaborador.belongsTo(gestor)
    //colaborador.belongsTo(rh)

colaborador.belongsTo(linguagem)

module.exports = colaborador