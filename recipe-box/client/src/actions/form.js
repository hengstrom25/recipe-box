export function updateFormInput(name, value) {
	return {
		type: "UPDATE_FORM", payload: {name, value}
	}
}