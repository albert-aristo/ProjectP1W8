'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Day.belongsTo(models.Employee, {foreignKey:`EmployeeId`})
      Day.hasMany(models.Transaction, {foreignKey:`DateId`})
    }
  };
  Day.init({
    date: DataTypes.DATE,
    EmployeeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};