class CategorySerializer < ActiveModel::Serializer
	belongs_to :user
	has_many :recipes

	
end