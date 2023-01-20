'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book - user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book - user.init({
    book: {
      type: DataTypes.INTEGER(11),
      allowNull:false,
      references:{
        model: "books",
        key: "id"
      }
    },
    user: {
      type: DataTypes.INTEGER(11),
      allowNull:false,
      references:{
        model: "useres",
        key: "id"
      }
    },
    status: DataTypes.ENUM('reserve', 'taken', 'available')
  }, {
    sequelize,
    modelName: 'book-user',
  });
  return book - user;
};