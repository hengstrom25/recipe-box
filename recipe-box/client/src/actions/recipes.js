import { loadForm } from './form'

export const REQUEST_RECIPES = 'REQUEST_RECIPES'

export function requestRecipes() {
	return {
		type: REQUEST_RECIPES
	}
}

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'

export function receiveRecipes(json) {
	return {
		type: RECEIVE_RECIPES,
		recipes: json
	}
}

export function fetchRecipes(category_id) {
	return dispatch => {
		dispatch(requestRecipes())
		return fetch('http://localhost:3001/categories/' + category_id +'/recipes')
			.then(response => response.json())
			.then(json => dispatch(receiveRecipes(json)))
	}
}

export const REQUEST_RECIPE = 'REQUEST_RECIPE'

export function requestRecipe() {
	return {
		type: REQUEST_RECIPE
	}
}

export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'

export function receiveRecipe(json) {
	return {
		type: RECEIVE_RECIPE,
		recipe: json
	}
}

export function fetchRecipe(recipe_id) {
	return dispatch => {
		dispatch(requestRecipe())
		return fetch('http://localhost:3001/recipes/' + recipe_id)
			.then(response => response.json())
			.then(json => {
			dispatch(receiveRecipe(json))
			dispatch(loadForm(json))
		})
	}
}