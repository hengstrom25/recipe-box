const initialState = {
		name: '',
		recipe_field: '',
		notes: '',
}

export default (state = initialState, action) => {
	switch(action.type) {
	case "UPDATE_FORM":
		return {
			...state,
			[action.payload.name]: action.payload.value 
		}
	default: return state
	
	case "LOAD_FORM":
        return {
            ...state,
            ...action.values
        }

	}
}


