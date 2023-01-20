'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Useres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Useres.init({
    role: {
      type: DataTypes.INTEGER(11),
      allowNull:false,
      references:{
        model: "roles",
        key: "id"
      }
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female'),
    mobile: DataTypes.STRING,
    nationCode: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Useres',
  });
  return Useres;
};