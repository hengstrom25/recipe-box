const initialState = 
{
	categories: {
		byId: {
			1: {
				id: 1, 
				name: "Salads",
				recipes: [1, 2],
			},
			2: {
				id: 2,
				name: "Desserts",
				recipes: [3],
			},
		},
		allIds: [1, 2],
		fetched: false, 
		fetching: false
	},
	recipes: {
		byId: {
			1: {
				id: 1,
				name: "Mom's Tossed Salad",
				recipe_field: " http://greatcooks.com/blah/123",
				notes: "This is a good salad",
				category_id: 1,
			},
			2: {
				id: 2,
				name: "Dad's Potato Salad",
				recipe_field: "http://goodstuff.com/abc/456",
				notes: "Many Calories",
				category_id: 1,
			},
			3: {
				id: 3,
				name: "Chocolate Cake",
				recipe_field: "http://easybake.com/xyz/999",
				notes: "Love it",
				category_id: 2,
			},
		},
		allIds: [1, 2, 3],
		fetched: false,
		fetching:false	
	},
}

export default initialState