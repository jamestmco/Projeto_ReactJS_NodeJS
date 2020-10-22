var Sequelize = require('sequelize');
var sequelize = require('./database');

var developer = sequelize.define('dev', {
    id_dev: Sequelize.STRING
},
    {
        timestamps: false,
    });
module.exports = developer