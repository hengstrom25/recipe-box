class CreateCategories < ActiveRecord::Migration[4.2]
	def change
		create_table :categories do |t|
			t.string :name
			t.integer :user_id
		end
	end
end