export const REQUEST_RECIPES = 'REQUEST_RECIPES'

export function requestRecipes() {
	return {
		type: REQUEST_RECIPES
	}
}

/*will need id argument somewhere*/
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'

export function receiveRecipes(json) {
	return {
		type: RECEIVE_RECIPES,
		recipes: json
	}
}

/*will need argument of category.id in fetchRecipes*/
export function fetchRecipes(category_id) {
	return dispatch => {
		dispatch(requestRecipes())
		return fetch('http://localhost:3001/categories/' + category_id +'/recipes')
			.then(response => response.json())
			.then(json => dispatch(receiveRecipes(json)))
	}
}