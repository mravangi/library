'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    role: DataTypes.ENUM('client', 'admin'),
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female'),
    mobile: DataTypes.STRING,
    nationalCode: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};