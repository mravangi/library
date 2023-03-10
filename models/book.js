'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book.init({
    category: {
      type: DataTypes.INTEGER(11),
      allowNull:false,
      references:{
        model: "categories",
        key: "id"
      }
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    volume: DataTypes.STRING,
    publisher: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};