'use strict';


module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Recipes', [
            {
                id: 1,
                recipeType: "Breakfast",
                recipeName: "Vegetable Potstickers",
                ingredientsList: "3 tablespoons vegetable oil divided, 1 cup diced shiitake mushrooms, 2 shallots minced, 3 cups shredded green cabbage, 2 carrots, peeled and grated, 1/2 cup diced water chestnuts, 1/2 cup chopped fresh cilantro leaves, 1 large egg, 3 cloves garlic minced, 1 tablespoon freshly grated ginger, 1 1/2 tablespoons reduced sodium soy sauce, 1 tablespoon rice wine vinegar,2 teaspoons sesame oil, Kosher salt and freshly ground black pepper to taste, 32 (3-inch) round wonton wrappers",
                directions:  "Cook it!", // Blog Content
                addedToList:  false,
                description:  "Something really tasty", // Blog Content
                imgUrl: "https://s23209.pcdn.co/wp-content/uploads/2018/07/Vegetable-PotstickersIMG_5662-360x360.jpg",
                notes: "image url",
                createdAt: new Date(),
                updatedAt: new Date()                
            },
            {
                id: 2,
                recipeType: "Breakfast",
                recipeName: "Pumpkin Spice French Toast",
                ingredientsList: "4 large eggs, 1 cup whole milk, 3/4 cup canned pumpkin puree, 1 1/2 teaspoons pumpkin pie spice, 1 teaspoon vanilla extract, 1/4 teaspoon kosher salt, 1 loaf brioche or Challah bread, cut into 1-inch thick slices, 1/4 cup unsalted butter, divided, 1/4 cup maple syrup, 1 tablespoon confectioners sugar",
                directions:  "Cook it!", // Blog Content
                addedToList:  false,
                description:  "Something really tasty", // Blog Content
                imgUrl: "https://s23209.pcdn.co/wp-content/uploads/2018/10/Easy-Pumpkin-Spice-French-ToastIMG_6883-360x360.jpg",
                notes: "Add a little less sugar",
                createdAt: new Date(),
                updatedAt: new Date()                
            },
            {
                id: 3,
                recipeType: "Breakfast",
                recipeName: "BROWN BUTTER MUSHROOM PASTA",
                ingredientsList: "4 large eggs, 1 cup whole milk, 3/4 cup canned pumpkin puree, 1 1/2 teaspoons pumpkin pie spice, 1 teaspoon vanilla extract, 1/4 teaspoon kosher salt, 1 loaf brioche or Challah bread, cut into 1-inch thick slices, 1/4 cup unsalted butter, divided, 1/4 cup maple syrup, 1 tablespoon confectioners sugar",
                directions:  "Cook it!", // Blog Content
                description:  "Something really tasty", // Blog Content
                imgUrl: "https://s23209.pcdn.co/wp-content/uploads/2018/10/Brown-Butter-Mushroom-PastaIMG_6906-360x360.jpg",
                notes: "Add a little more butter",
                createdAt: new Date(),
                updatedAt: new Date()                
            }
        ], {});
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Recipes', null, {});
    }
};