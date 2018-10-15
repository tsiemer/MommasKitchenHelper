'use strict';

module.exports = function(app, db) {
    
    app.get('/recipes/all', (req, res, next) => {
        db.Recipe.findAll({ }).then((result) => {
            res.render('recipes', {data: result});
        });
    })

    app.get('/recipes/:id', (req, res, next) => {
        db.Recipe.findOne({
            where:{
                id: req.params.id
            }
         }).then((result) => {
            var ingredients = result.dataValues.ingredientsList;
            var ingredientsList = ingredients.split(`\n`);
            
            var directions = result.dataValues.directions;
            var directionsList = directions.split(`\n`);

            res.render('recipe', {data: result, ingredientsList, directionsList});
        });
    })

    app.get('/newRecipe', (req, res, next) => {
        res.render('newRecipe');
    })
    
    
    app.post('/newRecipe', (req, res, next) => {
        db.Recipe.create({
            recipeName: req.body.recipeName,
            recipeType: req.body.recipeType,
            ingredientsList: req.body.ingredientsList,
            directions: req.body.directions,
            imgUrl: req.body.imgUrl
        }).then((result) => {
            return res.redirect('/recipes/all');
        })
    })

    app.get('/shoppingList/all', (req, res, next) => {
        db.Recipe.findAll({ 
            where: {
                addedToList: true
            }
        }).then((result) => {
            var ingredients = result.dataValues.ingredientsList;
            var ingredientsList = ingredients.split(`\n`);

            res.render('shopping-list', { data: result, ingredientsList });
        })
    })
    
    app.post('/shoppingList', (req, res, next) => {
        db.Recipe.update({
            addedToList: req.body.addedToList,
        },{ where: {
            
        }}).then((result) => {
            res.render('shopping-list', { data: result });
        })
    })

    app.get('/recipes/edit/:id', (req, res, next) => {
        db.Recipe.findOne({
            where:{
                id: req.params.id
            }
         }).then((result) => {
            var ingredients = result.dataValues.ingredientsList;
            var ingredientsList = ingredients.split(`\n`);
            
            var directions = result.dataValues.directions;
            var directionsList = directions.split(`\n`);

            res.render('editRecipe', {data: result, ingredientsList, directionsList});
        });
    })
    
    app.post('/recipes/edit/:id', (req, res, next) => {
        db.Recipe.update({
            recipeName: req.body.recipeName,
            recipeType: req.body.recipeType,
            ingredientsList: req.body.ingredientsList,
            directions: req.body.directions,
            imgUrl: req.body.imgUrl,
            notes: req.body.notes
        },{
        where:{
            id: req.params.id
        }}).then((result) => {
            res.redirect('/recipes/all');
        })
    })
};