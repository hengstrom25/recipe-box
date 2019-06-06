export const RECIPE_BEGIN = "RECIPE_BEGIN"
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
}

