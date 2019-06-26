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

			
		case 'DELETE_RECIPE':{
			return Object.assign({}, state, {
				allIds: state.allIds.filter(id => id !==action.payload)
			})
		}
		
		
		default: {
			return state;
		}
	}
}