var recipes = require('./recipes');

module.exports = function(app, db) {
	recipes(app, db)
}