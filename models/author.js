'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  author.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    mobilnumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};