import initialState from '../initialState.js'

export default (state = initialState.recipes, action) => {
	switch (action.type) {
	
		case 'ADD_RECIPE':
			return {
				...state,
			}
			
		case 'UPDATE_RECIPE': 
		{
			const id = action.recipe.id
			const oldRecipe = state.byId[id] ||  {}
			const newRecipe = action.recipe
			return Object.assign({}, state, {
				byId: Object.assign({}, state.byId, {
					[id]: Object.assign({}, oldRecipe, newRecipe)
				})
			})
		}
	
		case 'REQUEST_RECIPES': {
			return Object.assign({}, state, {
				fetching: true,
			})
		}
		
		case 'RECEIVE_RECIPES': {
			/*Get current list*/
			const previousRecipeState = state.allIds.map(id => state.byId[id])
			/*Remove previous version of duplicates*/
			const newRecipeIdList = action.recipes.map(recipe => recipe.id)
			const filteredList = previousRecipeState.filter(recipe => 
				/*action recipes doesn't include recipe.id*/
				!newRecipeIdList.includes(recipe.id))
			/*Add New*/
			const newRecipes = filteredList.concat(action.recipes)
			/*Combine back to original version of state*/
			return Object.assign({}, state, {
				fetching: false,
				fetched: true,
				allIds: newRecipes.map(recipe => recipe.id),
				byId: newRecipes.reduce((obj, rec) => {
					obj[rec.id] = rec; /*add recipe to byId hash*/
					return obj	
				}, {})
			})
		}
		
		/*reduce is like forEach. Applies a function to every element of the array. Function 
		is passed the array element, and a value you have control over. Function returns
		the new value to be passed the next time that function is called.*/
		
		
		case 'REQUEST_RECIPE': {
			return Object.assign({}, state, {
				fetching: true,
			})
		}
		
		case 'RECEIVE_RECIPE': {
		let obj = {}
		obj[action.recipe.id]=action.recipe
			return Object.assign({}, state, {
				fetching: false,
				fetched: true,
				allIds: [action.recipe.id],
				byId: obj
			})
		}

			
		case 'DELETE_RECIPE':{
			return Object.assign({}, state, {
				allIds: state.allIds.filter(id => id !==action.idToDelete)
			})
		}
		
		
		default: {
			return state;
		}
	}
}