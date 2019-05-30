import initialState from '../initialState.js'

export default (state = initialState.categories, action) => {
	switch (action.type) {
	
		case 'REQUEST_CATEGORIES': {
			return Object.assign({}, state, {
				fetching: true,
			})
		}
		
		case 'RECEIVE_CATEGORIES': {
			return Object.assign({}, state, {
				fetching: false,
				fetched: true,
				allIds: action.categories.map(category => category.id),
				byId: action.categories.reduce((obj, cat) => {
					obj[cat.id] = cat;
					return obj	
				}, {})
			})
		}
		
		case 'REQUEST_CATEGORY': {
			return Object.assign({}, state, {
				fetching: true,
			})
		}
		
		case 'RECEIVE_CATEGORY': {
		let obj = {}
		obj[action.category.id]=action.category
			return Object.assign({}, state, {
				fetching: false,
				fetched: true,
				allIds: [action.category.id],
				byId: obj
			})
		}
		
		
		
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