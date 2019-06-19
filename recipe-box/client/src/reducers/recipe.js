export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_RECIPE': {
			return state.concat(action.recipe);
		}
	}		
}