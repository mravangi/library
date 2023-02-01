'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('book_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book: {
        type: Sequelize.INTEGER(11),
          allowNull: false,
          references:{
            model: "books",
            key: "id"
          }
      },
      user: {
        type: Sequelize.INTEGER(11),
          allowNull: false,
          references:{
            model: "users",
            key: "id"
          }
      },
      status: {
        type: Sequelize.ENUM('reserve', 'taken', 'available')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('book_users');
  }
};