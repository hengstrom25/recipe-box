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