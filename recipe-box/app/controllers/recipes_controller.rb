class RecipesController < ApplicationController

	def index
		recipes = Recipe.where(category_id: params[:category_id])
		category = Category.find_by(id: params[:category_id])
		render json: recipes
	end
	
	def show
		recipe = Recipe.find_by(id: params[:id])
		render json: recipe
	end
	
	def new
		recipe = Recipe.new(recipe_params)
	end
	
	def create
    	recipe = Recipe.create(recipe_params)
    	render json: recipe, status: 201
	end
	
	#def edit
		#recipe = Recipe.find(params['id'])
		#item.update_attributes(recipe_params)
		#respond_with recipe, json:recipe
	#end
	
	def update
		recipe = Recipe.find_by(id: params[:id])
		item.update_attributes(recipe_params)
		respond_with recipe, json:recipe
	end
	
	def destroy
		recipe = Recipe.find_by(id: params[:id])
		recipe.destroy
	end
	
	private
	
	def recipe_params
		params.permit(:name, :recipe_field, :notes, :category_id)
	end	
	
	


end