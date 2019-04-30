class Recipe < ActiveRecord::Base
	belongs_to :category
	
	validates :name, presence: true
	validates :recipe_field, presence: true
	
end