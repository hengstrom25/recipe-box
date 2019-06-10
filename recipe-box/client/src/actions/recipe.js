/*export const RECIPE_BEGIN = "RECIPE_BEGIN"
export const RECIPE_SUCCESS = "RECIPE_SUCCESS"
export const RECIPE_ERROR = "RECIPE_ERROR"

export const recipe => (name, recipe_field, notes) => {
	return dispatch => {
		dispatch({ type: RECIPE_BEGIN });
		createRecipe(name, recipe_field, notes)
			.then(recipe => {
				storeAuthToken(recipe.auth_token);
				dispatch({
					type: RECIPE_SUCCESS,
					payload: recipe
				});
			})
					
	};
}*/

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

export function setRecipeField(id, recipe_field){
	return { type: "SET_RECIPE_FIELD", id: id, recipe_field: recipe_field }
}			

export function setRecipeNotes(id, notes){
	return { type: "SET_RECIPE_NOTES", id: id, notes: notes }
}
		
		
