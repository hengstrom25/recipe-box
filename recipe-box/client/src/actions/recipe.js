export const addRecipe = (recipe) => {
	return { type: "ADD_RECIPE", recipe };
}	

export const updateRecipe = (recipe) => {
	return { type: "UPDATE_RECIPE", recipe };
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

export const addRecipeDb = (recipe) => {
	return dispatch => {
		dispatch(addRecipe(recipe))
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

export const updateRecipeDb = (id, recipe) => {
	return dispatch => {
		dispatch(updateRecipe(recipe))
		return fetch('http://localhost:3001/recipes/' + id, {
			method: 'PATCH',
			headers: {
			"Content-type": 'application/json'
			},
			body: JSON.stringify({ recipe: recipe }) 
		})
			.then(response => response.json())
			.then(recipe => {
				dispatch(updateRecipe(recipe))
			})
			.catch(error => console.log(error))
	};
}

export function deleteRecipeDb(id) {
	return dispatch => {
		return fetch('http://localhost:3001/recipes/' + id, {
			method: "DELETE"
			}).then(() => dispatch(deleteRecipe(id))
	)}
}


		
		
