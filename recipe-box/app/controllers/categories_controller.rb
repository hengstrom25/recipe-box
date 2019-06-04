class CategoriesController < ApplicationController
#skip_before_action :verify_authenticity_token

	def index
		#categories = Category.where(user_id: current_user.id)
		categories = Category.all
		render json: categories
	end
	
	def show
		category = Category.find_by(id: params[:id])
		render json: category
	end
	
	def new
	    category = Category.new		
	end
	
	def create
    	category = Category.create
    	render json: category, status: 201
	end
	
	private
	
	def category_params
		params.require(:category).permit(:name)
	end


end