import initialState from '../initialState.js'

export default (state = initialState.recipes, action) => {
	switch (action.type) {
	
		case 'REQUEST_RECIPES': {
			return Object.assign({}, state, {
				fetching: true,
			})
		}
		
		case 'RECEIVE_RECIPES': {
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
		
		
		/*case 'ADD_RECIPE': {
			return state.concat(action.recipe);
		}	*/
			
		case 'DELETE_RECIPE':{
			return Object.assign({}, state, {
				allIds: state.allIds.filter(rec => rec.id !==action.payload)
			})
			/*const index = state.findIndex(recipe => recipe.id === action.recipeId);
			return [...state.slice(0, index), ...state.slice(index + 1)]*/
		}
		
		/*case 'SET_RECIPES': {
			return action.recipes;
		}*/
		
		case 'SET_RECIPE_NAME': {
		console.log('SET RECIPE NAME REDUCER')
			return Object.assign({}, state, {
				byId: Object.assign({}, state.byId, 
					{[action.id]: Object.assign({}, state.byId[action.id], 
						{name: action.name}
					)}
				)}
		)}
		
		case 'SET_RECIPE_FIELD': {
			return Object.assign({}, state, {
				byId: Object.assign({}, state.byId, 
					{[action.id]: Object.assign({}, state.byid[action.id], 
						{recipe_field: action.recipe_field}
					)}
				)}
		)}
		
		case 'SET_RECIPE_NOTES': {
			return Object.assign({}, state, {
				byId: Object.assign({}, state.allIds, 
					{[action.id]: Object.assign({}, state.byId[action.id], 
						{notes: action.notes}
					)}
				)}
		)}
		
		default: {
			return state;
		}
	}
}