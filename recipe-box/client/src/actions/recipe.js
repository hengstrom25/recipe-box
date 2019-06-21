export const addRecipe = (recipe) => {
	return { type: "ADD_RECIPE", recipe };
}	

export function deleteRecipe(id){
	return { type: "DELETE_RECIPE", payload: id }
}

export function setRecipeName(id, name){
	return { type: "SET_RECIPE_NAME", id: id, name: name }
}

export function setRecipeField(id, recipe_field){
	return { type: "SET_RECIPE_FIELD", id: id, recipe_field: recipe_field }
}	

export function setRecipeNotes(id, notes){
	return { type: "SET_RECIPE_NOTES", id: id, notes: notes }
}

/*export const API_URL = "http://localhost:3001/";
export const SET_RECIPE_NAME = "SET_RECIPE_NAME"
export const SET_RECIPE_FIELD = "SET_RECIPE_FIELD"
export const SET_RECIPE_NOTES = "SET_RECIPE_NOTES"*/

export const addRecipeDb = (recipe) => {
	return dispatch => {
		return fetch('http://localhost:3001/recipes', {
			method: 'POST',
			headers: {
			"Content-type": 'application/json'
			},
			body: JSON.stringify({ recipe: recipe }) 
		})
			.then(response => response.json())
			.then(recipe => {
				dispatch(addRecipe(recipe))
			})
			.catch(error => console.log(error))
	}
}

export function deleteRecipeDb(id) {
	return dispatch => {
		return fetch('http://localhost:3001/recipes/' + id, {
			method: "DELETE"
			}).then(() => dispatch(deleteRecipe(id))
	)}
}

/*export function setRecipeNameDb(id, name){
	console.log("SET RECIPE NAME ACTION")
	return dispatch => {
		return fetch("http://localhost:3001/recipes/" + id, {
			method: 'PATCH',
			}).then(() => dispatch(setRecipeName(id, name)))
}}	
	

export function setRecipeFieldDb(id, recipe_field){
	console.log("SET RECIPE FIELD ACTION")
	return dispatch => {
		return fetch("http://localhost:3001/recipes/" + id, {
			method: 'PATCH',
			}).then(() => dispatch(setRecipeField(id, recipe_field)))
}}			


export function setRecipeNotesDb(id, notes){
	console.log("SET RECIPE NOTES ACTION")
	return dispatch => {
		return fetch("http://localhost:3001/recipes/" + id, {
			method: 'PATCH',
			}).then(() => dispatch(setRecipeNotes(id, notes)))
}}	*/

		
		
