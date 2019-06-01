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
		recipe = Recipe.new
	end
	
	def create
    	recipe = Recipe.create
    	render json: recipe, status: 201
	end
	
	


end