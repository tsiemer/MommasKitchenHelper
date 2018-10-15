'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipeType: {
        type: Sequelize.ENUM('Breakfast', 'Lunch', 'Dinner', 'Snack')
      },
      recipeName: {
        type: Sequelize.STRING
      },
      ingredientsList: {
        type: Sequelize.TEXT,
        defaultValue: null
      },
      addedToList: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      directions: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING,
        defaultValue: null
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};