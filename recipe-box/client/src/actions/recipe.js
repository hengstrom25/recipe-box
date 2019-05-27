export const REQUEST_RECIPE = 'REQUEST_RECIPE'

export function requestRecipe() {
	return {
		type: REQUEST_RECIPE
	}
}

/*will need id argument somewhere*/
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'

export function receiveRecipe(json) {
	return {
		type: RECEIVE_RECIPE,
		recipe: json
	}
}

/*will need argument of category.id in fetchRecipes*/
export function fetchRecipe(recipe_id) {
	return dispatch => {
		dispatch(requestRecipe())
		return fetch('http://localhost:3001/recipes/' + recipe_id)
			.then(response => response.json())
			.then(json => dispatch(receiveRecipe(json)))
	}
}