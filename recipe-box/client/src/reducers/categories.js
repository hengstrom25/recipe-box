import initialState from '../initialState.js'

export default (state = initialState.categories, action) => {
	switch (action.type) {
		case 'ADD_CATEGORY': {
			return state.concat(action.category);
		}	
			
		case 'REMOVE_CATEGORY':{
			const index = state.findIndex(category => category.id === action.categoryId);
			return [...state.slice(0, index), ...state.slice(index + 1)]
		}
		
		case 'SET_CATEGORIES':{
			return action.categories;
		}
		
		default: {
			return state;
		}
	}
}