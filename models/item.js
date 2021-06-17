'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    get formatPrice(){
      return this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    static associate(models) {
      // define association here
      Item.hasMany(models.Transaction, {foreignKey:`ItemId`})
    }
  };
  Item.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};