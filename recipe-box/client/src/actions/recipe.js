export function deleteRecipe(id){
	return { type: "DELETE_RECIPE", payload: id }
}

export function deleteRecipeDb(id) {
	return dispatch => {
		return fetch('http://localhost:3001/recipes/' + id, {
			method: "DELETE"
			}).then(() => dispatch(deleteRecipe(id))
	)}
}

export const SET_RECIPE_NAME = "SET_RECIPE_NAME"
export const SET_RECIPE_FIELD = "SET_RECIPE_FIELD"
export const SET_RECIPE_NOTES = "SET_RECIPE_NOTES"

export function setRecipeName(id, name){
	return { type: "SET_RECIPE_NAME", id: id, name: name }
}

export function setRecipeNameDb(id, name){
	console.log("SET RECIPE NAME ACTION")
	return dispatch => {
		return fetch("http://localhost:3001/recipes/" + this.props.id, {
			method: 'PATCH',
			}).then(() => dispatch(setRecipeName(id, name)))
}}	

export function setRecipeField(id, recipe_field){
	return { type: "SET_RECIPE_FIELD", id: id, recipe_field: recipe_field }
}	

export function setRecipeFieldDb(id, recipe_field){
	console.log("SET RECIPE FIELD ACTION")
	return dispatch => {
		return fetch("http://localhost:3001/recipes/" + this.props.id, {
			method: 'PATCH',
			}).then(() => dispatch(setRecipeField(id, recipe_field)))
}}			

export function setRecipeNotes(id, notes){
	return { type: "SET_RECIPE_NOTES", id: id, notes: notes }
}

export function setRecipeNotesDb(id, notes){
	console.log("SET RECIPE NOTES ACTION")
	return dispatch => {
		return fetch("http://localhost:3001/recipes/" + this.props.id, {
			method: 'PATCH',
			}).then(() => dispatch(setRecipeNotes(id, notes)))
}}	

		
		
