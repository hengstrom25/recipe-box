import initialState from '../initialState.js'

export default (state = initialState.recipes, action) => {
	switch (action.type) {
		case 'ADD_RECIPE': {
			return state.concat(action.recipe);
		}	
			
		case 'REMOVE_RECIPE':{
			const index = state.findIndex(recipe => recipe.id === action.recipeId);
			return [...state.slice(0, index), ...state.slice(index + 1)]
		}
		
		case 'SET_RECIPES': {
			return action.recipes;
		}
		
		default: {
			return state;
		}
	}
}