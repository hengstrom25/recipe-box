import initialState from '../initialState.js'

export default (state = initialState.recipes, action) => {
	switch (action.type) {
		
		default: {
			return state;
		}
	}
}