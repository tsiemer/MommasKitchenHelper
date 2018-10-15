'use strict';

module.exports = (sequelize, DataTypes) => {
  var Recipe = sequelize.define('Recipe', {
    recipeType: {
      type: DataTypes.ENUM('Breakfast', 'Lunch', 'Dinner', 'Snack'),
      allowNull: false,
      defaultValue: 'Breakfast'
    },
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredientsList: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    directions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    addedToList: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};