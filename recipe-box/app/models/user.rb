class User < ActiveRecord::Base
	has_secure_password
	has_many :categories
	has_many :recipes, through: :categories
	
	validates :username, presence: true, uniqueness: true
	validates :email, presence: true, uniqueness: true
	validates :password, presence: true

end