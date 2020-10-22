var Sequelize = require('sequelize');
var sequelize = require('./database');

var gestor = sequelize.define('gp', {
    id_gp: Sequelize.STRING
},
    {
        timestamps: false,
    });
module.exports = gestor