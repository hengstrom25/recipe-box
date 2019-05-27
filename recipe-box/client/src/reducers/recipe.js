import initialState from '../initialState.js'

export default (state = initialState.recipes, action) => {
	switch (action.type) {
	
		case 'REQUEST_RECIPE': {
			return Object.assign({}, state, {
				fetching: true,
			})
		}
		
		case 'RECEIVE_RECIPE': {
			return Object.assign({}, state, {
				fetching: false,
				fetched: true,
				allIds: action.recipes.map(recipe => recipe.id),
				byId: action.recipes.reduce((obj, rec) => {
					obj[rec.id] = rec;
					return obj	
				}, {})
			})
		}
		
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