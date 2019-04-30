# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create([{
	username: 'Heidi Engstrom', 
	email: 'hengstrom25@gmail.com', 
	password: 'heidi'
	}, 
	{
	username: 'Marty Sauser',
	email: 'msauser2@gmail.com', 
	password: 'marty'
	}
	])
	
category = Category.create([{
	name: 'Breakfast',
	user_id: 1
	}, 
	{
	name: 'Chicken',
	user_id: 1
	}, 
	{
	name: 'Vegetarian',
	user_id: 1
	}, 
	{
	name: 'Side Dishes',
	user_id: 1
	}, 
	{
	name: 'Dessert',
	user_id: 1
	}, 
	{
	name: 'Breakfast',
	user_id: 2
	}, 
	{
	name: 'Chicken',
	user_id: 2
	}, 
	{
	name: 'Vegetarian',
	user_id: 2
	}, 
	{
	name: 'Side Dishes',
	user_id: 2
	}, 
	{
	name: 'Dessert',
	user_id: 2
	}
	])
	
recipe = Recipe.create([{
	name: 'Scrambled Eggs',
	recipe_field: 'https://www.foodnetwork.com/recipes/ina-garten/slow-cooked-scrambled-eggs-with-caviar-recipe-1941943',
	notes: 'Must try next time there is caviar in the house'
	}
	])