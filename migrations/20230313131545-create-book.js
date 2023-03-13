'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references:{
          model: "categories",
          key: "id"
        }
    },
    
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references:{
          model: "authors",
          key: "id"
        }
    },
      volume: {
        type: Sequelize.STRING
      },
      publisher:  {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references:{
          model: "publishers",
          key: "id"
        }
    },
      count: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('books');
  }
};