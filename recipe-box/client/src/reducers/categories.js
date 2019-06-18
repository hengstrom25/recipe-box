import initialState from '../initialState.js'

export default (state = initialState.categories, action) => {
	switch (action.type) {
	
		case 'REQUEST_CATEGORIES': {
			return {
				...state, 
				fetching: true,
			}
			/*return Object.assign({}, state, {
				fetching: true,
			})*/
		}
			
		case 'RECEIVE_CATEGORIES': {
			return {
				...state,
				fetching: false,
				fetched: true,
				allIds: action.categories.map(category => category.id),
				byId: action.categories.reduce((obj, cat) => {
					obj[cat.id] = cat;
					return obj	
				}, {})
			}
		}
		
		case 'REQUEST_CATEGORY': {
			return Object.assign({}, state, {
				fetching: true,
			})
		}
		
		case 'RECEIVE_CATEGORY': {
		const newById = Object.assign({}, state.byId, {[action.category.id]: action.category})
			return Object.assign({}, state, {
				fetching: false,
				fetched: true,
				allIds: Object.keys(newById),
				byId: newById
			})
		}
		
		default: {
			return state;
		}
	}
}