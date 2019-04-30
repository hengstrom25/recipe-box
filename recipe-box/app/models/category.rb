class Category < ActiveRecord::Base
	belong_to :user
	has_many :recipes
	
	validates :name, presence: true
	
end