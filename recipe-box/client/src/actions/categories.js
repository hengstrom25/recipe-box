export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'

export function requestCategories() {
	return {
		type: REQUEST_CATEGORIES
	}
}

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function receiveCategories(json) {
	return {
		type: RECEIVE_CATEGORIES,
		categories: json
	}
}

export function fetchCategories() {
	return dispatch => {
		dispatch(requestCategories())
		return fetch('http://localhost:3001/categories')
			.then(response => response.json())
			.then(json => dispatch(receiveCategories(json)))
	}
}

export const REQUEST_CATEGORY = 'REQUEST_CATEGORY'

export function requestCategory() {
	return {
		type: REQUEST_CATEGORY
	}
}

export const RECEIVE_CATEGORY= 'RECEIVE_CATEGORY'

export function receiveCategory(json) {
	return {
		type: RECEIVE_CATEGORY,
		category: json
	}
}

export function fetchCategory(category_id) {
	return dispatch => {
		dispatch(requestCategory())
		return fetch('http://localhost:3001/categories/' + category_id)
			.then(response => response.json())
			.then(json => dispatch(receiveCategory(json)))
	}
}