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
	
	private
	
	def recipe_params
		params.require(:recipe).permit(:name, :recipe_field, :notes, :category_id)
	end	
	
	


end