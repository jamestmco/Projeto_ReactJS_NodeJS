var Sequelize = require('sequelize');
var sequelize = require('./database');

var rh = sequelize.define('rh', {
    id_rh: Sequelize.STRING
},
    {
        timestamps: false,
    });
module.exports = rh