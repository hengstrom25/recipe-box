export function updateFormInput(name, value) {
	return {
		type: "UPDATE_FORM", payload: {name, value}
	}
}

export function loadForm(values) {
    console.log("load form",values)
    return {
        type: "LOAD_FORM",
        values: values
    }
}

