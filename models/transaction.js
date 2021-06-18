'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Day, {foreignKey:`DateId`})
      Transaction.belongsTo(models.Item, {foreignKey:`ItemId`})
    }
  };
  Transaction.init({
    ItemId: DataTypes.INTEGER,
    DateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};