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
    	recipe = Recipe.new(recipe_params)
    	if params[:category_id]
    		recipe.category_id = params[:category_id]
    	end
    		recipe.save
    	render json: recipe, status: 201
	end
	
	def edit
		recipe = Recipe.find(params['id'])
		recipe.update_attributes(recipe_params)
		render json:recipe
	end
	
	def update
		recipe = Recipe.find_by(id: params[:id])
		recipe.update_attributes(recipe_params)
		render json:recipe, status: :ok
	end
	
	def destroy
		recipe = Recipe.find_by(id: params[:id])
		recipe.destroy
		head :ok
	end

	
	private
	
	def recipe_params
		params.require(:recipe).permit(:id, :name, :recipe_field, :notes, :category_id)
	end	

	
	


end