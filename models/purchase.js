'use strict';

var LemonadeType = require('./lemonadetype');

module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define('Purchase', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    LemonadeTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Purchase.belongsTo(models.LemonadeType);
      }
    }
  });
  return Purchase;
};