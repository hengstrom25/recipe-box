export const addRecipe = (recipe) => {
	return { type: "ADD_RECIPE", recipe };
}	

export const updateRecipe = (recipe) => {
	return { type: "UPDATE_RECIPE", recipe };
}

export function deleteRecipe(id){
	return { type: "DELETE_RECIPE", payload: id }
}

export const addRecipeDb = (recipe, catid, history) => {
	return dispatch => {
		return fetch(`http://localhost:3001/categories/${catid}/recipes`, {
			method: 'POST',
			headers: {
			"Content-type": 'application/json'
			},
			body: JSON.stringify({ recipe: recipe }) 
		})
			.then(response => response.json())
			.then(recipe => {
				dispatch(addRecipe(recipe))
				history.push(`/recipes/${recipe.id}`)	
			})
			.catch(error => console.log(error))
	}
}

export const updateRecipeDb = (id, recipe, history) => {
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
				history.push(`/recipes/${recipe.id}`)
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


		
		
