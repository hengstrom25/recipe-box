class CreateRecipes < ActiveRecord::Migration[4.2]
	def change
		create_table :recipes do |t|
			t.string :name
			t.string :recipe_field
			t.string :notes
		end
	end
end