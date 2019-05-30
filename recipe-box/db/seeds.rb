# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

	
category = Category.create([{
	name: 'Breakfast',
	}, 
	{
	name: 'Salad',
	}, 
	{
	name: 'Soup',
	}, 
	{
	name: 'Side Dishes',
	}, 
	{
	name: 'Meat Dishes',
	}, 
	{
	name: 'Vegetarian',
	}, 
	{
	name: 'Pasta',
	}, 
	{
	name: 'Dessert',
	}, 
	{
	name: 'Other',
	}, 
	])
	
recipe = Recipe.create([{
	name: 'Scrambled Eggs',
	recipe_field: 'https://www.foodnetwork.com/recipes/ina-garten/slow-cooked-scrambled-eggs-with-caviar-recipe-1941943',
	notes: 'Must try next time there is caviar in the house',
	category_id: 1
	},
	{
	name: "Mom's Tossed Salad", 
	recipe_field: "http://greatcooks.com/blah/123",
	notes: "This is a good salad",
	category_id: 2
	},
	{
	name: "Dad's Potato Salad",
	recipe_field: "http://goodstuff.com/abc/456",
	notes: "Many calories",
	category_id: 2
	},
	{
	name: "Chocolate Cake",
	recipe_field: "http://easybake.com/xyz/999",
	notes: "Love it",
	category_id: 9
	},
	{
	name: "Caprese Salad",
	recipe_field: "2 Tomatoes, 1 container fresh mozzarella, fresh basil, olive oil, salt & pepper",
	notes: "Slice tomatoes and mozzarella into equally sized pieces. Layer with fresh basil, drizzle with olive oil and season with salt and pepper to taste",
	category_id: 2
	}
	])
	
	

	